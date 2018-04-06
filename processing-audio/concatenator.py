#!/bin/env python2.7

import os # get directories, make folders for file output
import platform
from pydub import AudioSegment
from string import digits
import uuid

opsys = platform.platform()
if opsys == 'Linux':
  sl = '/'
elif opsys == 'Windows':
  sl = '\\'

# path setups
parDir = os.path.dirname(os.getcwd()) # get soundboard directory
audioFolder = parDir + sl + audio
processedFolder = audioFolder + 'processed' + sl
# if no output folder exists, make one
if not os.path.exists(processedFolder):
  os.makedirs(processedFolder)

# volume normalizer function 
def matchTargAmp(sound, target_dBFS):
  change_in_dBFS = target_dBFS - sound.dBFS
  return sound.apply_gain(change_in_dBFS)
volNorm = 1 # volume normalization is on, target all clips to same dB
	
artists = ['maddox', 'dick', 'sean', 'asterios', 'tim']
names = range(len(artists)) # full filenames
epNums = range(len(artists)) # episode numbers
words = range(len(artists)) # word/phrases spoken in clip
types = range(len(artists)) # type of word(s) spoken
clips = range(len(artists)) # audio clips
combos = range(len(artists)) # artist clip aggregates
starts = range(len(artists)) # start times of clips in clip aggregates
lengths = range(len(artists)) # length of individual clips

artistOutputs = range(len(artists))
for i in xrange(len(artistOutputs)):
  artistOutputs[i] = artists[i] + 'Combo.mp3'
  
# returns list of all file names in dir
fileList = os.listdir(audioFolder) 

for i in xrange(len(artists)):
  count = 0 # index of files for current artist 
  # start with empty lists
  names[i] = []
  epNums[i] = []
  words[i] = []
  types[i] = []
  clips[i] = []
  combos[i] = []
  starts[i] = []
  lengths[i] = []
  artistNames = names[i]
  artistEpNums = epNums[i]
  artistWords = words[i]
  artistTypes = types[i]
  artistClips = clips[i]
  artistCombo = combos[i]
  artistStarts = starts[i]
  artistLengths = lengths[i]
	
	# WIP instead of throwing away episodes, save those too
	
  for ele in reversed(fileList): # go backwards to allow pruning
    if artists[i] in ele[0:len(artists[i])]:
      artistNames.append(ele)
      artistClips.append(AudioSegment.from_mp3(audioFolder+ele))
      if volNorm: # normalize volume to manually set dB amplitude
        artistClips[count]= matchTargAmp(artistClips[count],-20)
      artistLengths.append(artistClips[count].duration_seconds)
      # break up fileName using - delimiters
      # indices: 0:artist; 1:epNo; 2:words; 3:wordType
      broken = []
      broken = ele.replace('.mp3','').split('-')
      artistEpNums.append(broken[1])
      artistWords.append(broken[2].replace('_',' '))
      if len(broken) > 3:
        artistTypes.append(broken[3])
      else:
        artistTypes.append('')
      if not count:
        artistCombo = artistClips[count]
        artistStarts.append(0)
      else:
        artistCombo += artistClips[count]
        artistStarts.append(artistCombo.duration_seconds)
      # prune current file from list
      fileList.remove(ele)
      count += 1

  # save cobbled files
  artistCombo.export(
    processedFolder+artistOutputs[i],format="mp3")
   
  # save data in plain text (file for each artist)
  # first line is column headers
  fname = artists[i] + 'Data.dat'
  newFile = open(processedFolder + fname,'w')
  newFile.write('fileName\twords\tstart\tlength\n')
  for i in xrange(len(artistNames)):
    newFile.write(artistNames[i] + '\t' + artistWords[i] + '\t')
    newFile.write(str(artistStarts[i]) + '\t' + str(artistLengths[i]))
    newFile.write('\n')
  newFile.close()

# WIP save to a file called clips.json with the format in discord
fname = 'clips.json'
newFile = open(processedFolder + fname,'w')
newFile.write('[\n')
for i in xrange(len(artists)):
  artNames = names[i]
  artEpNums = epNums[i]
  artWords = words[i]
  artTypes = types[i]
  artClips = clips[i]
  artCombo = combos[i]
  artStarts = starts[i]
  artLengths = lengths[i]
  for j in xrange(len(artNames)):
    # make a UUID using a SHA-1 hash of a namespace UUID and a name
    hashid = uuid.uuid5(uuid.NAMESPACE_DNS, artNames[j])
    newFile.write(' { id: "'+str(hashid)+'", artist: "'+ artists[i])
    newFile.write('", episode: "'+ str(artEpNums[j]) +'", words: "')
    newFile.write(artWords[j] +'", typeOfWord: "'+artTypes[j])
    newFile.write('", startTime: '+ str(artStarts[j]) + ', length: ')
    newFile.write(str(artLengths[j])+', fileName: "'+artistOutputs[i])
    newFile.write('" },\n')
newFile.write(']')
newFile.close()


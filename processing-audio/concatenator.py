import os.path # make folders for file output
from pydub import AudioSegment
import eyed3
from string import digits

audioFolder = '/home/geoff/code/soundboard/audio/'
# if no output folder exists, make one
if not os.path.exists(audioFolder+'processed/'):
	os.makedirs(audioFolder+'processed/')

# volume normalizer function 
def matchTargAmp(sound, target_dBFS):
    change_in_dBFS = target_dBFS - sound.dBFS
    return sound.apply_gain(change_in_dBFS)
volNorm = 1 # volume normalization is on, target all clips to same dB
	
artists = ['maddox', 'dick', 'sean', 'asterios', 'tim']
names = range(len(artists)) # full filenames
words = range(len(artists)) # word/phrases spoken in clip
clips = range(len(artists)) # audio clips
combos = range(len(artists)) # artist clip aggregates
starts = range(len(artists)) # start times of clips in clip aggregates
lengths = range(len(artists)) # length of individual clips

# returns list of all file names in dir
fileList = os.listdir(audioFolder) 

for i in xrange(len(artists)):
	count = 0 # index of files for current artist 
	# start with empty lists
	names[i] = []
	words[i] = []
	clips[i] = []
	combos[i] = []
	starts[i] = []
	lengths[i] = []
	artistNames = names[i]
	artistWords = words[i]
	artistClips = clips[i]
	artistCombo = combos[i]
	artistStarts = starts[i]
	artistLengths = lengths[i]
	
	for ele in reversed(fileList): # go backwards to allow pruning
		if artists[i] in ele[0:len(artists[i])]:
			artistNames.append(ele)
			artistClips.append(AudioSegment.from_mp3(audioFolder+ele))
			if volNorm:
				artistClips[count] = matchTargAmp(artistClips[count],-20)
			artistLengths.append(artistClips[count].duration_seconds)
			# strip filename down to words/phrase
			artistWords.append(
				ele.replace(artists[i],'').replace('-','')
				.replace('.mp3','').translate(None,digits))
			if not count:
				artistCombo = artistClips[count]
				artistStarts.append(0)
			else:
				artistCombo += artistClips[count]
				artistStarts.append(artistCombo.duration_seconds)
			# prune current file from list
			fileList.remove(artistNames[count])
			count += 1

	# save cobbled files
	artistCombo.export(audioFolder+'processed/'+artists[i]+'Combo.mp3',format="mp3")
	
	# save data 
	fname = artists[i] + 'Data.dat'
	newFile = open(audioFolder + 'processed/' + fname,'w')
	newFile.write('fileName\twords\tstart\tlength\n')
	for i in xrange(len(artistNames)):
		newFile.write(str(artistNames[i])+'\t'+str(artistWords[i])+'\t')
		newFile.write(str(artistStarts[i])+'\t'+str(artistLengths[i]))
		newFile.write('\n')
	newFile.close()

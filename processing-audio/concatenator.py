import os.path # make folders for file output
from pydub import AudioSegment
import eyed3
from string import digits

audioFolder = '/home/geoff/code/soundboard/audio/'
# if no output folder exists, make one
if not os.path.exists(audioFolder+'processed/'):
	os.makedirs(audioFolder+'processed/')
	
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
	
	usedIndices = [] # mark indices of used elements for removal
	print len(fileList)
	for ele in reversed(fileList): # go backwards to allow pruning
		if artists[i] in ele[0:len(artists[i])]:
			artistNames.append(ele)
			artistClips.append(AudioSegment.from_mp3(audioFolder+ele))
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
			usedIndices.append(count)
			# prune current file from list
			fileList.remove(artistNames[count])
			count += 1

	# save cobbled files
	artistCombo.export(audioFolder+'processed/'+artists[i]+'Combo.mp3',format="mp3")
	
	# save data WIP WIP WIP
	fname = artists[i] + 'Data.dat'
	newFile = open(audioFolder + 'processed/' + fname,'w')
	for i in xrange(len(names)):
		newFile.write(str(names[i])+'\t'+str(starts[i])+'\n')
	newFile.close()

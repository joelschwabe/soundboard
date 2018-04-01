import os.path # make folders for file output
from pydub import AudioSegment
import eyed3 

audioFolder = '/home/geoff/code/soundboard/audio/'

names = ['dick-02-feelingYouGetWhenYou','dick-02-drinkBeer']
clips = range(len(names))
starts = range(len(names))
lengths = range(len(names))

for i in xrange(len(names)):
	clips[i] = AudioSegment.from_mp3(audioFolder+names[i]+'.mp3')
	lengths[i] = clips[i].duration_seconds
	if not i:	
		starts[i] = 0
		phrase = clips[i]
	else:
		starts[i] = phrase.duration_seconds
		phrase += clips[i]

# if no output folder exists, make one
if not os.path.exists(audioFolder+'processed/'):
	os.makedirs(audioFolder+'processed/')

# save cobbled file
phrase.export(audioFolder + 'processed/' +"combo.mp3", format="mp3")

# print sequence of names and their onset times to file
fname = 'namesANDtimes.dat'
newFile = open(audioFolder + 'processed/' + fname,'w')
for i in xrange(len(names)):
	newFile.write(str(names[i])+'\t'+str(starts[i])+'\n')
newFile.close()

from pydub import AudioSegment
import eyed3

basest = '/home/geoff/code/soundboard/processing-audio/'

names = ['dick-02-feelingYouGetWhenYou','dick-02-drinkBeer']
parts = range(len(names))
starts = range(len(names))
lengths = range(len(names))

for i in xrange(len(names)):
	parts[i] = AudioSegment.from_mp3(names[i]+'.mp3')
	lengths[i] = parts[i].duration_seconds
	if not i:	
		starts[i] = 0
		phrase = parts[i]
	else:
		starts[i] = phrase.duration_seconds
		phrase += parts[i]

phrase.export("combo.mp3", format="mp3")

fname = 'namesANDtimes.dat'
newFile = open(basest + fname,'w')
for i in xrange(len(names)):
	newFile.write(str(names[i])+'\t'+str(starts[i])+'\n')
newFile.close()

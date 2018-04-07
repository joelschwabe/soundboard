#!/bin/env python2.7

# use in folder with the files to be renamed

import os # get directories, make folders for file output
import platform
import re # regular expression witchcraft

opsys = platform.system()
if opsys == 'Linux':
  sl = '/'
elif opsys == 'Windows':
  sl = '\\'

# returns list of all file names in dir
fileList = os.listdir(os.getcwd()) 

def showID():
	for ele in fileList:
	  if 'mp3' in ele:
			broken = []
			broken = ele.split('-')
			broken[1] = 'bp' + broken[1]
			newName = '-'.join(broken)
			os.rename(ele,newName)
#showID()

def wordSplitter():
	for ele in fileList:
		if 'mp3' in ele:
			broken = []
			broken = ele.split('-')
			if len(broken) > 2:
				words = broken[2]
				words = words[0].upper()+words[1:]
				chopped = re.findall('[A-Z][^A-Z]*',words)
				broken[2] = '_'.join(chopped)
				newName = '-'.join(broken)
				os.rename(ele,newName)
#wordSplitter()

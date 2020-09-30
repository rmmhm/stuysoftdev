# Ryan Ma, Pak Ming Lau, Constance Chen
# SoftDev
# K07 -- Stl/O: Divine your Destiny!
#   Reads from a file containing jobs and their percentages and then using those percentages to weight each job and give a random job
# 2020-10-02

import random

# reading from a file
f = open("occupations.csv")
file = f.read()
f.close()

dict = {}

# splits the file into a 2d array in which
# i[0] is the job and i[1] is the percentage
file = file.split("\n")
for i in range(len(file) - 1):
    if(file[i][0] == '"'):  #special case where the job's name has a comma
        file[i] = file[i][1::]
        file[i] = file[i].split('",')
    else:
        file[i] = file[i].split(',')

total = float(file[len(file) - 2][1])   # save the total percentage
file = file[1:len(file) - 2]    # delete the first and last entry (description and total)

# puts array entries into the dictionary
# converts percentages from strings to floats
for i in range(len(file)):
    dict.update({file[i][0] : float(file[i][1])})

# turns percentages to ranges
pastValues = 0
for i in dict:
    dict[i] += pastValues
    pastValues = dict[i]

# rounds the percentages to the nearest tenth
# it was separated from the above for loop because some percentages wouldn't round
for i in dict:
    dict[i] = round(dict[i], 1)

# returns a random job given a weighted percentage
def randomJob():
    randomFloat = round(random.uniform(.1, total), 1)
    for i in dict:
        if(randomFloat <= dict[i]):
            print(i)
            break

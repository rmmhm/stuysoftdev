# Ryan Ma, Pak Ming Lau, Constance Chen
# Team Blue Bird
# SoftDev
# K06 -- Learnanation Through Amalgamation
#   Amalgamation of our krewes.py
# 2020-10-02

import random

KREWES = {
'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

# chooses and prints a random name from KREWES
def printRandomName():
    team = random.choice(list(KREWES.keys()))
    print("\n" + random.choice(KREWES[team]) + " of team " + team + "\n")

# chooses and prints random name from a single team in KREWES
def printRandomNameOfChosenTeam():
    team = input("\nPlease type in the name of the team you want to randomly select a person from.(orpheus, rex, or endymion)\n").lower() # prompts user to select a team
    while team not in KREWES: # checks if name is in KREWES
        team = input("\nError, not a team name, please input a valid team name\n").lower()
        print("\n" + random.choice(KREWES[team]) + " of team " + team + "\n") #prints name

# prompts the user to either choose a random name from KREWES as a whole or a single team
def main():
    while True:
        answer = input("What would you like to do? (Input the number of your choice)\n0. Receive a random name from KREWES\n1. Choose a team to receive a random name from\n2. Exit\n")
        if(answer != "0" and answer != "1" and answer != "2"):
            print("\nError, not a valid choice\n")
        elif(answer == "0"):
            printRandomName()
        elif(answer == "1"):
            printRandomNameOfChosenTeam()
        else:
            break

main()

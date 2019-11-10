from nltk.sentiment.vader import SentimentIntensityAnalyzer
import json

advice = {
	("cold", 0) : "We recommend you going to the doctor. This can be a more serious issue.",
	("cold", 1) : "It sounds like you're having a hard time. We recommend taking advil or tylenol.",
	("cold", 2) : "Get plenty of sleep and rest. Drink warm liquids. We recommend taking allergy medicines such as ",

	("fever", 0) : "Take a fever reliever, if your temperature is over 104 and doesn't go down, call the\
	 doctor. ",
	("fever", 1) : "Take a fever reliever, drink plenty of liquids, get plenty of rest. Consider going\
	 to the doctor if the fever does not go down or rises up ",
	("fever", 2) : "Take a fever reliever, drink plenty of liquids, and get plenty of rest.",

	("headache", 0) :"It sounds like you have a migrane, which is to understate, very bad. Drink\
	 a lot of caffeine and put a hotpack on you. Take a break from work and rest. GO TO A DOCTOR, IT COULD\
	 BE FAR WORSE." , 

	("headache", 1) : "Hmm, sounds like a bad case, but not too bad. Ibuprofen is our recommened take.\
 	 Put a hot pack to soothen your neck and temples. Eat a full meal and go to sleep.", 

	("headache", 2) : "It is not too bad, but we don't want it to get worse. What we recommend is to get\
	 some rest and not to watch anything on a screen. Do not strain your eyes. Eating will help you\
	 feel better."
}

def get_advice(sentence, sickness):
	result = get_polarity(sentence)
	score = stage_convert(result)
	return advice.get((sickness, score), "Get some rest. Drink lots of liquids. Eat healthy. Exercise regularly. You should go see a doctor if it gets worse!")

def get_polarity(sentence):
	sid = SentimentIntensityAnalyzer()
	return sid.polarity_scores(sentence)

def stage_convert(result):
	if(result["compound"] <= -0.7):
		return 0
	elif(result["compound"] < -0.2):
		return 1	
	else:
		return 2		
	







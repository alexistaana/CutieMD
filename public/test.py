from nltk.sentiment.vader import SentimentIntensityAnalyzer

testcases = [
	# Good cold
	"I have a cold. It hasn't been all that bad though! I've been able to go around and still run\
	errands and chores. Also taking care of my sister and mom since they also picked up on the cold\
	but it's been good. I'm drinking plenty of liquids and eating soupy foods and taking my medicine.",

	# Neutral cold
	"I have a cold. I'm kind of sick but feeling okay. I've been getting a lot of runny noses and\
	stuffy noses. I've also been coughing a bit and sneezing occasionally. The cold isn't too bad.",

	# Bad cold
	"I've been coughing a lot and my nose has been an absolute nightmare to deal with.\
	I think that my cough is slowly developing into something worse because it's been hurting\
	in the back of my throat as well. I'm tired all day and can't do anything and I've been\
	feeling absolutely miserable all the time. My headaches and migraines are also pretty bad."
        
        # Srikar's cold
        " I am having a cold. I'm dying of with a low temperature. I'm vomiting and having a super runny\
        nose. I want to commit assisted suicide. This cold is too much to bear."

        # Bad headache
        "I have been having terrible headaches all day. They hurt so much that they make me want\
        to just stay in bed all day! It's challenging for me to do anything and I can't bear it\
        any longer. Painkillers aren't working and it's keeping me up all night as well"



        "
        
        "
        ]



sid = SentimentIntensityAnalyzer()
for sentence in testcases:
	print('\n\n' + sentence)
	ss = sid.polarity_scores(sentence)
	for k in sorted(ss):
		print('{0}: {1}, '.format(k, ss[k]), end='')









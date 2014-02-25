import sys

print 'The command line argure are: '

for i in sys.argv:
	print i

print '\n\'
def function():
	global x                #get x 
	x=9
	z=20

x=20
function()
print x
	
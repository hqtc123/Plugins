
class Plate(object):
	"""docstring for Plate"""
	row1=[[-9,'-'],[-9,'-'],[-9,'-']]
	row2=[[-9,'-'],[-9,'-'],[-9,'-']]
	row3=[[-9,'-'],[-9,'-'],[-9,'-']]
	def __init__(self, arg):
		super(Plate, self).__init__()
		self.arg = arg

	def isDone():
		if(row1[0][0]+row1[1][0]+row1[2][0]==3):
			return true;

	def printPlate(self):
		for x in self.row1:
			print x[1]

p=Plate("o")
p.printPlate()



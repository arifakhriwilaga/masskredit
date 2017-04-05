task :deploy do
	system "npm run build:prod"
	system "git status"
	system "git add ."
	system "git commit -m 'Build prod'"
	system "git push origin develop"
	# system "https://git.wgs.co.id -uari.Fakhri"
# puts "#{count}"
# message = `git log -1 --pretty="%s"`.chomp
# puts "Last commit: #{message}"
	# value = `git status`
	# puts "#{count[1]}"
	# value = `git status`.chomp

	# count = `git status`.each_line.count
	# dataLine = []

	# dataLine.push(value)
	# puts dataLine.count

	# puts "#{value}"
	# arrayRemove = [1,2,3,4,5]
	# for x in 1..count
	# 	dataLine.push(x)
	# 	if dataLine.length == 18
	# 		arrayRemove.each do |del|
	#     	dataLine.delete_at(dataLine.index(del))
				
	# 		end
	# 		removeArrayDataLine = dataLine.count - 2

	#   	for y in 0..removeArrayDataLine
	# 			puts dataLine[y]
	# 		end	
	#   #   totalDataLine = dataLine.count

	# 		# if totalDataLine < removeArrayDataLine
	# 	 #    until totalDataLine > removeArrayDataLine do
	# 	 #    	puts "data masuk #{totalDataLine}"
	# 	 #    	totalDataLine -= removeArrayDataLine
	# 	 #    end 
	# 		# end

	# 	end
	# end
end
task :deploy do
	# system "npm run build:prod",
	system "git add ."
	system "git commit -m 'Build prod'"
	system "git push origin master"
	system "Username for 'https://git.wgs.co.id:'=ari.Fakhri"
	 
end
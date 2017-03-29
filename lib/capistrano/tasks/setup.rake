task :deploy do
	# system "npm run build:prod",
	system "git add ."
	system "git commit -m 'Build prod'"
	system "git push origin master"
	puts ("ari.Fakhri=")
	puts ("Handsome100=")

end
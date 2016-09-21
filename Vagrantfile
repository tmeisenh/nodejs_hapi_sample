# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  # config.vm.box_check_update = false
  config.vm.network :forwarded_port, guest: 3131, host: 3131 
  config.vm.network :forwarded_port, guest: 80, host: 8080 

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
		vb.memory = "1024"
	end

	config.vm.provision "shell", inline: <<-SHELL
		apt-get update
		apt-get install -y openssl libssl-dev gcc gdb git zsh ctags tmux rbenv ruby-build
		apt-get install -y git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties
    curl -sL https://deb.nodesource.com/setup_4.x > /tmp/setup_node4.sh
    chmod +x /tmp/setup_node4.sh
    /tmp/setup_node4.sh
    apt-get install -y nodejs

	SHELL

	config.vm.provision "shell", privileged: false,  inline: <<-SHELL
		#git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    #git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
		git clone https://github.com/tmeisenh/homedir.git &&
		cd homedir && git submodule update --init --recursive 
	SHELL
end

# theGivingTree

## Hi-Fi Prototype
Clean project is in app/. Uses Expo. 

### Steps:
Download XCode from the App Store.  
Download ExpoGo app on your iPhone.   

Run these in your command line: 
git clone https://github.com/laineywang/theGivingTree.git  
brew install node  
npm install -g expo-cli  
brew install watchman  
sudo gem install cocoapods  

To run the app, cd into app/ and from there type:
npm start  
If everything loads and you can run the simulator with no errors (either on your phone or from XCode simulator), then you should be good to go. 

### DISCLAIMER: idk what packages you have installed on your computer, so you will almost definitely need to run more commands to download things (like XCode simulator? idk). Some troubleshooting tips:
- Command not recognized error = you need to install that package (google "install [package] package")  
- Generally, if you’re getting permissions errors, try running “sudo” in front of a command (npm install --global yarn —> sudo npm install --global yarn)
- When you get an error and you don't know what to do, Google it!! Cannot stress this enough, this is literally all I do lol

### Would recommend using this!! Has pretty clear instructions: https://reactnative.dev/docs/environment-setup.
If you can get that to work, you should be good with this too.

### Other things: 
- I use the Prettier code extension in VSCode, so to be consistent I recommend downloading that extension too. I run my formatter on save (you can turn that on in Settings), but otherwise you can do option+shift+F to run it manually every time you write some new code. 

<img width="428" alt="Screen Shot 2022-02-25 at 8 28 00 PM" src="https://user-images.githubusercontent.com/57604153/155828892-a3d362a7-fbe8-44cd-8ebd-ab70f95e081c.png">

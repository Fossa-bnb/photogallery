const mongoose = require('mongoose');

const randomPuppy = require('random-puppy');

mongoose.connect('mongodb://localhost/photos', { autoIndex: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connection open');
});

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomId: Number,
  photos: [{ photoId: Number, url: String, caption: String }],
}, { autoIndex: false });

roomSchema.set('autoIndex', false);

const Room = mongoose.model('Room', roomSchema);
Room.ensureIndexes((err) => {
  if (err) return (err);
});


// array of captions
const captionsSource = ['A watched pot never boils.', 
'A drowning man will clutch at a straw.', 
'An apple a day keeps the doctor away.', 
'An onion a day keeps everyone away.', 
'An ounce of protection is worth a pound of cure.', 
'Another pot ! Try the teapot.', 
'As fit as a fiddle.', 
'As hard as nails.', 
'As sick as a dog.', 
'As you go through life, make this your goal, watch the doughnut and not the hole.', 
'Be not a baker if your head is made of butter.', 
'Beauty is but skin deep.', 
'Better late thrive than never do well.', 
'Better to be poor and healthy rather than rich and sick.', 
'Better to wear out than rust out.', 
'Bread never falls but on its buttered side.', 
'Cleanliness is next to Godliness.', 
'Content is health to the sick and riches to the poor.', 
'Don"t bite the hand that feeds you.', 
'Drink like a fish, water only.', 
'Early to bed, early to rise, makes you healthy, wealthy & wise.', 
'Enough is as good as a feast.', 
'Fair words butter no cabbage.', 
'Give a man a fish and he will eat for the day. Give him a fishing rod, and he will eat forever.', 
'Good wine ruins the purse, and bad wine ruins the stomach.', 
'Greediness burst the bag.', 'Grumbling makes the loaf no larger.', 
'Half a loaf is better than none.', 
'He who rises late must trot all day.', 
'He who drinks a little too much drinks much too much.', 
'His eyes are bigger than his belly.', 
'Hunger is the best sauce.', 
'It is no use crying over spilt milk.', 
'Old friends and old wine are best.', 
'One man"s meat is another man"s poison.', 
'Ready money is ready medicine.', 
'Sound as a bell.', 
'The nearer the bone the sweeter the meat.', 
'The proof of the pudding is in the eating.', 
'There"s many a slip, twixt cup and the lip.', 
'To add insult to injury.', 
'To look as if butter will not melt in his mouth.', 
'Too many cooks spoil the broth.', 
'What can"t be cured must be endured.', 
'What doesn’t kill us makes us stronger.', 
'What you eat today walks and talks tomorrow.', 
'Wondrous is the strength of cheerfulness.', 
'You are what you eat.', 
'You can"t have your cake and eat it too.', 
'When you analyse it you see that short term you ca…can"t have your cake and eat it too, is correct.', 
'You can eat an elephant if you do it one mouthful at a time.', 
'You can"t unscramble a scrambled egg.', 
'I take a lot of pride in being myself. I’m comfortable with who I am.', 
'Don’t talk, just act. Don’t say, just show. Don’t promise, just prove.', 
'Never stop doing great just because someone doesn’t give you credit.', 
'It always seems impossible until it’s done.', 
'Marry the right person. This one decision will determine 90% of your happiness or misery.', 
'Be honest.', 
'A bully is always a coward.', 
'A handsome shoe often pinches the foot.', 
'A good thing is all the sweeter when won with pain.', 
'A man too careful of danger lives in continual torment.', 
'A miss is as good as a mile.', 
'Adversity flatters no man', 
'Adversity and loss make a man wise', 
'All promises are either broken or kept.', 
'All things come to those that wait.', 
'An eye for an eye and a tooth for a tooth.', 
'An open door may tempt a saint.', 
'As one door closes, another always opens.', 
'As you go through life, make this your goal, watch the doughnut and not the hole.', 
'Brevity is the soul of wit.', 
'Cut your coat according to the cloth.', 
'Discretion is the better part of valour.', 
'Do right and fear no man.', 
'Easy come, easy go.', 
'Experience is the hardest teacher. She gives the test first and the lesson afterwards.', 
'Familiarity breeds contempt.', 
'Fortune favours the brave.', 
'Hall binks are oft sliddery.     An explanation', 
'He who laughs last, laughs longest.', 
'Home is where the heart is.', 
'Hope for the best and prepare for the worst.', 
'If wishes were horses, beggars would ride.', 
'In the country of the blind, the one-eyed man is king.', 
'It never rains but it pours.', 
'Leave tomorrow till tomorrow.', 
'Life begins at forty.', 
'Life"s trials may be hard to bear, but patience can outlive them.', 
'Live and learn.', 
'Manners maketh the man.', 
'No man is worse for knowing the worst of himself.', 
'Only the good die young.', 
'Procrastination is the thief of time.', 
'The best things in life are free.', 
'The family that prays together, stays together.', 
'The longer you live the more you see.', 
'The meek shall inherit the earth.', 
'The receiver is as bad as the thief.', 
'To wait and be patient soothes many a pang.',
'Bread never falls but on its buttered side.']









const seedDb = () => {
  for (let i = 1; i <= 100; i += 1) {
    const numPhotos = Math.floor(Math.random() * 10) + 2;
    const photosArray = [];

    for (let j = 1; j <= numPhotos; j += 1) {
      const photoObj = {
        photoId: j,
        url: 'http://lorempixel.com/400/600/animals/8/',
        caption: captionsSource[Math.floor(Math.random() * 100)],
      };
      photosArray.push(photoObj);
    }

    const room = new Room({
      roomId: i,
      photos: photosArray,
    });

    room.save((err) => {
      if (err) return console.error(err);
      console.log(`Saved room with id ${room.roomId}`);
    });
  }
};

seedDb();


// const firstRoom = new Room({
//   id: 1,
//   photos: [{
//     id: 1,
//     url: 'http://lorempixel.com/400/600/nature/1/',
//     caption: 'A watched pot never boils',
//   },
//   {
//     id: 2,
//     url: 'http://lorempixel.com/400/600/nature/2/',
//     caption: 'A drowning man will clutch at a straw.',
//   },
//   {
//     id: 3,
//     url: 'http://lorempixel.com/400/600/nature/3/',
//     caption: 'An apple a day keeps the doctor away.',
//   }],
// });

// firstRoom.save((err, firstRoom) => {
//   if (err) return console.error(err);
//   console.log('saved first room');
// });
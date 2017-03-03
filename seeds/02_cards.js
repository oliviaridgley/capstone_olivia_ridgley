'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('cards').insert({
          id: 1,
          question: 'Given the choice of anyone in the world, whom would you want as a dinner guest?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 2,
          question: 'Would you like to be famous? In what way?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 3,
          question: 'Before making a telephone call, do you ever rehearse what you are going to say? Why?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 4,
          question: 'What would constitute a “perfect” day for you?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 5,
          question: 'When did you last sing to yourself? To someone else?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 6,
          question: 'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 7,
          question: 'Do you have a secret hunch about how you will die?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 8,
          question: 'Name three things you and your partner appear to have in common.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 9,
          question: 'For what in your life do you feel most grateful?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 10,
          question: 'If you could change anything about the way you were raised, what would it be?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 11,
          question: 'Do you have a secret hunch about how you will die?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 12,
          question: 'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 13,
          question: 'If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 14,
          question: 'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 15,
          question: 'What is the greatest accomplishment of your life?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 16,
          question: 'What do you value most in a friendship?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 17,
          question: 'What is your most treasured memory?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 18,
          question: 'What is your most terrible memory?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 19,
          question: 'If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 20,
          question: 'What does friendship mean to you?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 21,
          question: 'What roles do love and affection play in your life?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 22,
          question: 'Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 23,
          question: 'How close and warm is your family? Do you feel your childhood was happier than most other people’s?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 24,
          question: 'How do you feel about your relationship with your mother?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 25,
          question: 'Make three true “we” statements each. For instance, “We are both in this room feeling ...',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 26,
          question: 'Complete this sentence: “I wish I had someone with whom I could share ..."',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 27,
          question: 'If you were going to become a close friend with your partner, please share what would be important for him or her to know.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 28,
          question: 'Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 29,
          question: 'Share with your partner an embarrassing moment in your life.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 30,
          question: 'When did you last cry in front of another person? By yourself?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 31,
          question: 'Tell your partner something that you like about them already.',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 32,
          question: 'What, if anything, is too serious to be joked about?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 33,
          question: 'If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 34,
          question: 'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 35,
          question: 'Of all the people in your family, whose death would you find most disturbing? Why?',
          deck_id: 1
        }),
        knex('cards').insert({
          id: 36,
          question: 'Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.',
          deck_id: 1
        }),
        //Start of second deck : sunday supper
        knex('cards').insert({
          id: 37,
          question: 'What is a that you have never forgotten?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 38,
          question: 'What was your favorite toy as a child?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 39,
          question: 'What do you feel most grateful for?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 40,
          question: 'Can someone be educated if they have not gone to school?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 41,
          question: 'Who was/is your favorite teacher?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 42,
          question: 'What was the first thing you remember being proud of?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 43,
          question: 'The poet Maya Angelou once said, “If you don’t like something, change it. If you can’t change it, change your attitude.” What do you think she meant by this? Have you ever had to do this?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 44,
          question: 'What one lesson about love would you share with those younger than you?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 45,
          question: 'What traditions or rituals do you practice in your life right now?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 46,
          question: 'What recipe do you have memorized',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 47,
          question: 'Is it possible to be too compassionate?  Why or why not?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 48,
          question: 'How do you feel about social media (Facebook, Twitter, Instagram, Snapchat)? How do they affect your relationships with others?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 49,
          question: 'Tell me about the first time you fell in love.',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 50,
          question: 'What makes some individuals “good workers,” others average workers and still others poor workers?',
          deck_id: 2
        }),
        knex('cards').insert({
          id: 51,
          question: 'What does it mean to be successful?',
          deck_id: 2
        }),
        //Start of deck three : new year
        knex('cards').insert({
          id: 52,
          question: 'Do you think it’s possible to change one’s self? How have you changed over the years/decades?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 53,
          question: 'How do you think you’ve changed over the past year?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 54,
          question: 'What was your favorite book or movie from last year? What did you like about it?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 55,
          question: 'Talk about two things for which you felt thankful or grateful for today.',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 56,
          question: 'At this point in life, do you believe life is or isn’t fair? What has made you feel this way?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 57,
          question: 'What is the one thing you couldn’t live without?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 58,
          question: 'What was your favorite thing that you learned this year (either in school or outside of it)?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 59,
          question: 'During what part of your day do you feel most anxious and rushed? How could we change that?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 60,
          question: 'What do you do each day to recharge after a long day? Do you typically get to do this every day? Why or why not?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 61,
          question: 'What is the hardest thing about being # years old?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 62,
          question: 'What is the best thing about being # years old?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 63,
          question: 'If you could make money doing whatever you love to do, what would you want to do for a living?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 64,
          question: 'What do you want your life to look like in 10 years? In 50 years?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 65,
          question: 'How do you want to impact the world in the next year?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 66,
          question: 'What about the next year are you most excited about?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 67,
          question: 'What fear would you like to overcome?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 68,
          question: 'What new skill do you wish you could learn?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 69,
          question: 'Tell me what you think the future will be like.',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 70,
          question: 'What has been your proudest moment?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 71,
          question: 'What is one thing you’d like to learn how to do in the next year?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 72,
          question: 'In the year 2030, what do you hope we will have discovered that will change the world for the better?',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 73,
          question: 'What was the best year of your life so far? Explain.',
          deck_id: 3
        }),
        knex('cards').insert({
          id: 74,
          question: 'Talk about the most difficult transition you’ve experienced in your lifetime.',
          deck_id: 3
        })
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cards_id_seq', (SELECT MAX(id) FROM cards))");
    });
};

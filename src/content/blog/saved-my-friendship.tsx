import React from 'react';
import { BlogPost } from '@/types/blog';

export const post: BlogPost = {
  title: "How FLICK2SPLIT Saved My Friendship Group | Bill Splitting Tips",
  excerpt: "A real story from one of our users about how our app helped preserve a friendship that was strained by money issues.",
  date: "April 28, 2023",
  imageUrl: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  category: "User Stories",
  slug: "saved-my-friendship",
  author: {
    name: "Jamie Rivera",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
};

const BlogContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        I never thought an app would save one of my most valued friendships, but that's exactly what happened last summer.
      </p>
      
      <p>
        My best friend Taylor and I have known each other since college. We've been through everything together - breakups, job changes, moves across the country. But last year, something unexpected started to create tension between us: money.
      </p>
      
      <h2>How It Started</h2>
      
      <p>
        It began when we decided to take a two-week road trip down the California coast. We were both excited, had saved up for months, and created a detailed itinerary of all the places we wanted to visit.
      </p>
      
      <p>
        The first few days were amazing. We drove along scenic routes, stayed at cute Airbnbs, and enjoyed incredible meals. But as the days went on, I started to notice something: I was paying for more things than Taylor was.
      </p>
      
      <p>
        At first, it was small things - I'd cover a coffee stop, then lunch, then gas. Taylor would say "I'll get you back" or "I'll cover the next one," but increasingly, that wasn't happening. I started keeping mental notes, which quickly became actual notes in my phone.
      </p>
      
      <h2>The Breaking Point</h2>
      
      <p>
        By day 10 of our trip, I was frustrated. According to my calculations, Taylor owed me over $400, but whenever I brought it up, the conversation would get awkward. Taylor would say I was being "too exact" or that "it all evens out in the end."
      </p>
      
      <p>
        But it wasn't evening out, and I was starting to feel taken advantage of. The worst part? I could feel our friendship straining. Our conversations became shorter, our laughs less frequent. We were both aware of the elephant in the room.
      </p>
      
      <h2>Finding FLICK2SPLIT</h2>
      
      <p>
        That night, while Taylor was showering, I searched online for "how to split expenses with friends without awkwardness." That's when I found FLICK2SPLIT. The reviews looked promising, so I downloaded it immediately.
      </p>
      
      <p>
        The next morning, I showed it to Taylor. "Look, I found this app that can help us keep track of our expenses. We can just snap photos of receipts, and it'll tell us who owes what. No more mental math or awkward conversations."
      </p>
      
      <p>
        To my relief, Taylor was receptive. "That's actually perfect. I know I've been bad at keeping track. I honestly didn't realize how much you were covering."
      </p>
      
      <h2>The Transformation</h2>
      
      <p>
        From that point on, we used FLICK2SPLIT for everything. Every receipt got scanned, every expense logged. The app made it clear who paid for what, and we could settle up with just a tap.
      </p>
      
      <p>
        The most surprising benefit wasn't just financial clarity - it was how it transformed our communication. With the money issue handled efficiently and transparently, the tension between us disappeared. We could focus on enjoying our trip instead of worrying about who was paying for what.
      </p>
      
      <p>
        By the end of our trip, not only had we settled all our expenses fairly, but our friendship was stronger than ever. We had honest conversations about money and our different approaches to it, which deepened our understanding of each other.
      </p>
      
      <h2>Beyond the Trip</h2>
      
      <p>
        We've continued to use FLICK2SPLIT long after our road trip ended. Whether we're grabbing dinner, splitting utilities for our annual cabin weekend, or going in on a gift for another friend, the app has become our go-to tool.
      </p>
      
      <p>
        I'm convinced that without FLICK2SPLIT, my friendship with Taylor might have suffered lasting damage. Money issues have a way of creating resentment that can poison even the strongest relationships.
      </p>
      
      <p>
        Instead, we're planning our next adventure together, and this time, there's no anxiety about how we'll handle expenses. That peace of mind is priceless.
      </p>
    </div>
  );
};

export default BlogContent; 
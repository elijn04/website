import React from 'react';
import { BlogPost } from '@/types/blog';

export const post: BlogPost = {
  title: "5 Tips for Fair Bill Splitting with Friends",
  excerpt: "Learn how to avoid awkward money situations with friends by following these simple bill-splitting etiquette tips.",
  date: "May 15, 2023",
  imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  category: "Tips & Tricks",
  slug: "tips-for-fair-bill-splitting",
  author: {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
};

const BlogContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        We've all been there - the check arrives after a meal with friends, and suddenly there's an awkward silence. Who pays? How do you split it? What if someone had three cocktails while you stuck to water?
      </p>
      
      <p>
        Bill splitting doesn't have to be a source of tension. Here are five tips to make the process fair and stress-free:
      </p>
      
      <h2>1. Discuss payment expectations before ordering</h2>
      
      <p>
        The best way to avoid awkwardness is to address it upfront. Before you even order, briefly mention how you plan to handle the bill. A simple "Should we split evenly or pay for our own items?" sets clear expectations.
      </p>
      
      <h2>2. Use the FLICK2SPLIT app for accurate splits</h2>
      
      <p>
        Instead of mental math or awkward calculator passing, use our app to quickly scan the receipt and assign items to each person. This ensures everyone pays exactly for what they ordered, plus their share of tax and tip.
      </p>
      
      <h2>3. Consider income disparities among friends</h2>
      
      <p>
        If your friend group has varying income levels, be sensitive to this reality. Sometimes the fairest approach isn't strictly mathematical. In close friend groups, those who can afford more might occasionally treat others or suggest less expensive venues.
      </p>
      
      <h2>4. Account for non-monetary contributions</h2>
      
      <p>
        Did someone drive everyone to the restaurant? Did a friend spend hours planning the outing? Consider these non-monetary contributions when splitting costs. The person who drove might pay a bit less to account for gas and wear on their vehicle.
      </p>
      
      <h2>5. Settle up promptly</h2>
      
      <p>
        The longer a debt lingers, the more awkward it becomes. Make it a habit to settle bills immediately using digital payment methods. FLICK2SPLIT integrates with popular payment apps to make this seamless.
      </p>
      
      <h3>When to split evenly vs. itemizing</h3>
      
      <p>
        As a general rule of thumb:
      </p>
      
      <ul>
        <li>Split evenly when: Everyone ordered roughly the same amount, you all shared multiple dishes, or the difference in spending is minimal.</li>
        <li>Itemize when: There are significant disparities in what people ordered, someone doesn't drink alcohol while others had multiple drinks, or dietary restrictions resulted in price differences.</li>
      </ul>
      
      <p>
        Remember, the goal isn't perfect mathematical fairness in every situation, but rather maintaining positive relationships while ensuring no one feels taken advantage of. Sometimes, the simplest approach is to alternate who pays the entire bill across multiple outings.
      </p>
      
      <p>
        With these tips and the FLICK2SPLIT app, you can make bill splitting a smooth, forgettable part of your social gatherings rather than a source of tension.
      </p>
    </div>
  );
};

export default BlogContent; 
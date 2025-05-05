export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: "news" | "event" | "offer";
  content?: string; // Full content for the detail page
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Summer Reading Challenge",
    date: "June 15, 2023",
    description:
      "Join our exciting summer reading adventure! Read 10 books over summer and win awesome prizes.",
    imageUrl: "/images/news/n1.jpg",
    category: "event",
    content: `
        <h2>Summer Reading Adventure!</h2>
        <p>Get ready for the most exciting reading challenge of the year! Our Summer Reading Adventure is designed to keep young minds active and engaged during the summer break.</p>

        <h3>How It Works:</h3>
        <ol>
          <li>Sign up at the front desk or online</li>
          <li>Choose books from our specially curated summer collection</li>
          <li>Read at least 10 books over the summer</li>
          <li>Fill out your reading passport for each book</li>
          <li>Collect fun stickers and badges along the way</li>
          <li>Complete the challenge to receive your certificate and prizes!</li>
        </ol>

        <h3>Special Events:</h3>
        <p>Every Friday, we'll host special reading sessions with guest storytellers, fun activities, and refreshments. Don't miss our grand finale celebration on August 30th!</p>

        <h3>Awesome Prizes Include:</h3>
        <ul>
          <li>Limited edition iLearners Hub t-shirts</li>
          <li>Book vouchers</li>
          <li>Art supply kits</li>
          <li>Surprise mystery boxes</li>
          <li>And a chance to win our grand prize: A complete science experiment kit!</li>
        </ul>

        <p>Registration starts on June 1st. Limited spots available, so sign up early!</p>
      `,
  },
  {
    id: 2,
    title: "New Science Lab Opening",
    date: "July 5, 2023",
    description:
      "We're excited to announce our brand new science lab with fun experiments for all ages!",
    imageUrl: "/images/news/n1.jpg",
    category: "news",
    content: `
        <h2>Introducing Our Amazing New Science Lab!</h2>
        <p>We are thrilled to announce the grand opening of our state-of-the-art Science Lab at iLearners Hub! This incredible new space is designed to spark curiosity and foster a love for scientific discovery in children of all ages.</p>

        <h3>What to Expect:</h3>
        <p>Our new Science Lab features interactive stations where kids can explore various scientific concepts through hands-on experiments. From chemistry reactions that fizz and bubble to physics demonstrations that wow and amaze, there's something for every young scientist!</p>

        <h3>Lab Features:</h3>
        <ul>
          <li>Interactive touch-screen learning stations</li>
          <li>Real microscopes and lab equipment sized for kids</li>
          <li>Safe chemistry experiment stations</li>
          <li>Physics and engineering building area</li>
          <li>Nature and biology exploration zone</li>
          <li>Space and astronomy corner</li>
        </ul>

        <h3>Opening Day Activities:</h3>
        <p>Join us on July 5th for our grand opening celebration! We'll have:</p>
        <ul>
          <li>Exciting science demonstrations every hour</li>
          <li>Make-your-own slime station</li>
          <li>Rocket launching in the playground</li>
          <li>Special guest: Dr. Curious, the science magician</li>
          <li>Refreshments and science-themed snacks</li>
        </ul>

        <p>The Science Lab will be open to all members during regular hours starting July 6th. Science workshops will be scheduled weekly - check our calendar for details!</p>
      `,
  },
  {
    id: 3,
    title: "Early Bird Registration Discount",
    date: "Valid until August 1, 2023",
    description:
      "Register for fall classes before August 1st and receive a 15% discount on all courses!",
    imageUrl: "/images/news/n1.jpg",
    category: "offer",
    content: `
        <h2>Early Bird Gets the Discount!</h2>
        <p>Planning ahead pays off! Register for our fall semester classes before August 1st and receive an exclusive 15% discount on all courses.</p>

        <h3>Why Register Early?</h3>
        <ul>
          <li>Save 15% on all course fees</li>
          <li>Secure spots in our most popular classes</li>
          <li>Get first pick of preferred schedules</li>
          <li>More time to prepare for an amazing learning journey</li>
          <li>Flexible payment options available for early registrants</li>
        </ul>

        <h3>Featured Fall Courses:</h3>
        <p>This fall, we're introducing exciting new courses including:</p>
        <ul>
          <li>Creative Coding for Beginners (ages 7-10)</li>
          <li>Junior Scientists Club (ages 8-12)</li>
          <li>Art Around the World (ages 5-13)</li>
          <li>Math Mysteries (ages 9-14)</li>
          <li>Story Creation Workshop (ages 6-11)</li>
          <li>And many more!</li>
        </ul>

        <h3>How to Register:</h3>
        <p>Early bird registration is available:</p>
        <ul>
          <li>Online through our parent portal</li>
          <li>In-person at our front desk (Monday-Saturday, 9am-5pm)</li>
          <li>By phone at (555) 123-4567</li>
        </ul>

        <p>Don't wait! This special offer ends at midnight on August 1st, 2023. Terms and conditions apply.</p>
      `,
  },
  {
    id: 4,
    title: "Art Contest Winners",
    date: "May 28, 2023",
    description:
      "Congratulations to all participants in our annual art contest! View the winning masterpieces here.",
    imageUrl: "/images/news/n1.jpg",
    category: "news",
    content: `
        <h2>Celebrating Young Artists: Art Contest Results!</h2>
        <p>What an amazing display of creativity and talent! Our annual Art Contest brought together young artists from across the community, and we were absolutely blown away by the incredible artwork submitted.</p>

        <h3>Winners by Age Category:</h3>

        <h4>Ages 5-7</h4>
        <ul>
          <li>🥇 First Place: Emma Johnson - "My Magical Garden"</li>
          <li>🥈 Second Place: Noah Williams - "Space Adventure"</li>
          <li>🥉 Third Place: Sofia Garcia - "Ocean Friends"</li>
        </ul>

        <h4>Ages 8-10</h4>
        <ul>
          <li>🥇 First Place: Liam Chen - "Dinosaur Dreams"</li>
          <li>🥈 Second Place: Olivia Smith - "City of the Future"</li>
          <li>🥉 Third Place: Ethan Brown - "My Super Hero Family"</li>
        </ul>

        <h4>Ages 11-13</h4>
        <ul>
          <li>🥇 First Place: Ava Martinez - "Rainbow Forest"</li>
          <li>🥈 Second Place: Mason Taylor - "Robot Helpers"</li>
          <li>🥉 Third Place: Isabella Kim - "Underwater Kingdom"</li>
        </ul>

        <h3>Special Recognition Awards:</h3>
        <ul>
          <li>Most Creative Use of Materials: Jackson Lee</li>
          <li>Most Inspiring Message: Zoe Thompson</li>
          <li>Community Choice Award: Ryan Patel</li>
        </ul>

        <p>All winning artwork will be displayed in our Art Gallery until June 30th. Each winner will receive their certificate and prizes during our special ceremony on June 5th at 4pm.</p>

        <p>Thank you to everyone who participated and to our wonderful judges! Stay tuned for information about our next art workshop series starting in July.</p>
      `,
  },
  {
    id: 5,
    title: "Robotics Workshop",
    date: "July 20-22, 2023",
    description:
      "Build your own robot in this 3-day workshop for kids ages 8-12. Limited spots available!",
    imageUrl: "/images/news/n1.jpg",
    category: "event",
    content: `
        <h2>Robotics Workshop: Build Your Own Robot!</h2>
        <p>Calling all future engineers and robot designers! Our popular Robotics Workshop is back this summer, and it's going to be better than ever!</p>

        <h3>Workshop Details:</h3>
        <ul>
          <li><strong>Dates:</strong> July 20-22, 2023</li>
          <li><strong>Time:</strong> 9:00am - 12:00pm each day</li>
          <li><strong>Ages:</strong> 8-12 years</li>
          <li><strong>Location:</strong> iLearners Hub Tech Room</li>
          <li><strong>Cost:</strong> $150 (all materials included)</li>
          <li><strong>Spaces:</strong> Limited to 15 participants</li>
        </ul>

        <h3>What Participants Will Learn:</h3>
        <p>This hands-on workshop will guide children through the exciting process of building and programming their very own robot! Throughout the three days, participants will:</p>
        <ul>
          <li>Learn basic robotics concepts and terminology</li>
          <li>Discover how sensors and motors work</li>
          <li>Build a functional robot using our special kit</li>
          <li>Program their robot to perform tasks</li>
          <li>Participate in fun robot challenges</li>
          <li>Work in teams to solve engineering problems</li>
        </ul>

        <h3>What to Bring:</h3>
        <ul>
          <li>Enthusiasm and creativity!</li>
          <li>Snack and water bottle</li>
          <li>Optional: notebook for sketching and notes</li>
        </ul>

        <p>No prior experience with robotics or coding is necessary - just a curious mind and eagerness to learn! Each participant will take home their completed robot at the end of the workshop.</p>

        <p>Registration is required and spaces fill quickly. Register through our website or at the front desk by July 10th.</p>
      `,
  },
];

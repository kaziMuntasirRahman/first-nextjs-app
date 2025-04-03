import PageHead from "@/components/PageHead";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "The Rise of Quantum Computing",
    slug: "quantum-computing-rise",
    content: "Quantum computers leverage qubits that can exist in multiple states simultaneously, enabling them to solve complex problems exponentially faster than classical computers. Recent breakthroughs at IBM and Google have demonstrated quantum supremacy for specific tasks. While practical applications are still 5-10 years away, industries like pharmaceuticals and cryptography are preparing for disruption. The technology could revolutionize drug discovery by simulating molecular interactions with perfect accuracy. However, significant challenges remain in error correction and maintaining quantum coherence. Major tech firms and governments are investing billions to overcome these hurdles. As we approach the quantum era, businesses must understand both the transformative potential and security implications of this emerging technology.",
    date: "2023-11-20",
    author: "Dr. Alan Turington",
    category: "Technology",
    word_count: 156
  },
  {
    id: 2,
    title: "Fermentation: Ancient Technique, Modern Revival",
    slug: "fermentation-revival",
    content: "From kimchi to kombucha, fermented foods are experiencing a global renaissance. This ancient preservation method enhances nutritional value by increasing bioavailability of vitamins and minerals. The process creates beneficial probiotics that support gut health, which modern science links to improved immunity and mental health. Home fermentation requires minimal equipment—just vegetables, salt, and patience. Many enthusiasts report therapeutic benefits from the ritualistic preparation. Farmers markets now feature locally crafted sauerkrauts and kefirs with innovative flavor profiles. As consumers seek alternatives to processed foods, fermentation offers both health benefits and connection to culinary traditions. Food scientists are now studying how different microbial cultures affect flavor development and nutritional content.",
    date: "2023-11-18",
    author: "Chef Marco Vong",
    category: "Food",
    word_count: 148
  },
  {
    id: 3,
    title: "Neuroplasticity: Rewiring Your Brain",
    slug: "neuroplasticity-guide",
    content: "Contrary to old beliefs, adult brains can form new neural connections throughout life. Targeted mental exercises can strengthen cognitive functions in measurable ways. Learning a musical instrument, for example, increases gray matter density in the auditory cortex. Mindfulness meditation shows similar effects on attention-regulation areas. Even simple habits like brushing teeth with your non-dominant hand stimulate neural growth. Studies on London taxi drivers revealed enlarged hippocampi from spatial memory training. This understanding revolutionizes rehabilitation after brain injuries. Patients recover functions by creating alternative neural pathways. The key is consistent, challenging practice—what neuroscientists call 'effortful learning.' Anyone can harness neuroplasticity to enhance mental performance at any age.",
    date: "2023-11-16",
    author: "Dr. Sarah Neurath",
    category: "Science",
    word_count: 172
  },
  {
    id: 4,
    title: "Dark Mode: Hype or Helpful?",
    slug: "dark-mode-analysis",
    content: "While dark mode has become a design trend, its actual benefits are nuanced. The reduced blue light emission may marginally improve sleep quality when used at night. However, studies show reading comprehension suffers with light-on-dark text for extended periods. Graphic designers note that dark interfaces can make color accuracy judgments difficult. Battery savings on OLED screens are real—up to 30% for predominantly white content. Accessibility experts recommend offering both modes, as some users with astigmatism find dark backgrounds cause text halo effects. The ideal solution may be context-aware systems that automatically adjust based on ambient light. As display technology evolves, we may see smarter implementations that optimize for both eye comfort and functionality.",
    date: "2023-11-14",
    author: "UX Designer Raj Patel",
    category: "Design",
    word_count: 163
  },
  {
    id: 5,
    title: "Microadventures: Local Exploration",
    slug: "microadventures-guide",
    content: "You don't need exotic destinations to experience adventure. The microadventure movement emphasizes discovering hidden gems within 50 miles of home. Try sleeping under the stars in your backyard or cooking meals over a camp stove in a nearby park. Urban explorers document forgotten infrastructure like abandoned rail lines transformed into greenways. Geocaching turns neighborhoods into treasure hunts using GPS coordinates. These low-cost, low-planning excursions provide psychological benefits similar to distant travel. Participants report heightened appreciation for their local environment and unexpected social connections. Outdoor gear companies now offer microadventure kits with compact essentials. The philosophy proves that novelty and discovery are states of mind, not dependent on passport stamps.",
    date: "2023-11-12",
    author: "Outdoor Guide Jess Kim",
    category: "Travel",
    word_count: 158
  },
  {
    id: 6,
    title: "Voice Search Optimization Strategies",
    slug: "voice-search-seo",
    content: "With 50% of searches now voice-activated, content strategies must adapt. Voice queries tend to be longer and conversational—optimize for question phrases like 'who invented' or 'how to fix.' Featured snippets become crucial as assistants often read these verbatim. Local businesses should claim 'near me' searches with complete Google My Business profiles. Technical SEO gains importance with fast-loading, mobile-friendly sites ranking higher in voice results. Structured data helps algorithms understand context for precise answers. Early adopters report 30% increases in organic traffic from voice-optimized content. As smart speakers proliferate, brands that master natural language patterns will dominate this growing search channel.",
    date: "2023-11-10",
    author: "SEO Specialist Tom Zhang",
    category: "Marketing",
    word_count: 142
  },
  {
    id: 7,
    title: "Biophilic Design in Workspaces",
    slug: "biophilic-design",
    content: "Incorporating natural elements into offices boosts productivity by 15%, studies show. Living walls with air-purifying plants reduce volatile organic compounds while lowering stress markers. Materials like wood and stone subconsciously connect us to nature, improving cognitive function. Strategic window placement aligning with circadian rhythms regulates employee energy levels. Even abstract nature imagery can have measurable effects—one experiment found sea life screensavers reduced blood pressure during stressful tasks. Forward-thinking companies create 'nature breaks' with indoor gardens or water features. As hybrid work evolves, home offices also benefit from these principles. The best implementations subtly integrate nature without sacrificing functionality, proving humans work better when connected to their biological roots.",
    date: "2023-11-08",
    author: "Architect Nina Kowalski",
    category: "Design",
    word_count: 166
  },
  {
    id: 8,
    title: "The Science of Perfect Coffee",
    slug: "coffee-science",
    content: "Precision brewing transforms ordinary beans into extraordinary cups. Water temperature between 195-205°F optimally extracts flavors without bitterness. The golden ratio is 1:16 coffee-to-water by weight for balanced strength. Grind size must match brewing method—espresso requires fine powder while French press needs coarse grounds. Freshness matters most; beans peak 7-14 days post-roasting. Professional tasters evaluate acidity, body, and aroma using standardized scoring sheets. Home baristas can improve technique by controlling variables one at a time. Recent research reveals how bean cellular structure affects extraction dynamics. Whether using a $20 pour-over or $2000 machine, understanding these principles elevates daily coffee from routine to ritual.",
    date: "2023-11-06",
    author: "Barista Miguel Santos",
    category: "Food",
    word_count: 152
  },
  {
    id: 9,
    title: "Digital Detox Experiments",
    slug: "digital-detox",
    content: "A growing movement challenges constant connectivity with intentional tech breaks. Participants report improved focus after just 24 hours offline. Successful detoxes require preparation—set auto-responders and download offline entertainment. The first 48 hours often trigger withdrawal symptoms like phantom phone vibrations. Many discover how frequently they reach for devices out of habit rather than need. Post-detox, most adopt permanent changes like phone-free meals or morning routines. Some companies now sponsor staff retreats with locked device pouches. Neuroscientists confirm these breaks reduce cortisol levels and improve memory consolidation. While not practical long-term, periodic disconnection helps reset our relationship with technology and reclaim attention spans.",
    date: "2023-11-04",
    author: "Psychologist Dr. Helen Carter",
    category: "Wellness",
    word_count: 161
  },
  {
    id: 10,
    title: "Upcycling Fashion Trends",
    slug: "upcycling-fashion",
    content: "Sustainable designers are transforming waste materials into high-end apparel. Denim scraps become statement jackets, while parachute silk gets new life as dresses. The process requires creative pattern-making to work with irregular material shapes. Major brands now host take-back programs to source materials from used garments. Independent designers showcase zero-waste collections where every scrap finds purpose. Consumers appreciate the unique character of upcycled pieces—no two items are identical. Beyond environmental benefits, this movement preserves traditional sewing techniques at risk of being lost. As fast fashion declines, upcycling proves that sustainability and style can coexist beautifully. The most innovative works blend vintage fabrics with modern silhouettes for truly timeless fashion.",
    date: "2023-11-02",
    author: "Designer Elena Morales",
    category: "Fashion",
    word_count: 155
  }
]


const Blogs = () => {
  return (
    <div>
      <PageHead title="This is Blogs Page" />
      <p className="text-center text-lg mb-5">Total Blogs: <span className="font-semibold">{blogs.length}</span></p>
      <section className="flex flex-wrap mx-auto justify-evenly gap-y-5 max-w-5xl pb-14">
        {
          blogs.map((blog) =>
            <div key={blog.slug} className="border rounded-lg h-[360px] w-[300px] p-2 flex flex-col items-start relative">
              <h1 className="text-lg min-h-14">{blog.title}</h1>
              <p>{blog.author}</p>
              <p className="mt-4 text-justify">{blog.content.length>200 ? blog.content.slice(0,300)+'...' : blog.content}</p>
              <Link href={`blogs/${blog.slug}`} className="px-2 bg-gray-200 border rounded-sm cursor-pointer hover:bg-gray-300  absolute bottom-3 right-3">Read More</Link>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default Blogs;
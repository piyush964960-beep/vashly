
import React, { useState } from 'react';
import { 
  X, 
  Check, 
  PlayCircle, 
  ArrowRight, 
  Plus, 
  Minus, 
  Search, 
  MessageSquare, 
  Send, 
  Clock,
  Linkedin,
  Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';

// --- Types ---
interface StatCardProps {
  stat: string;
  label: string;
  sublabel: string;
  colorClass: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

// --- Components ---

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#FF1F6D] text-white text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-8">
          🚀 671 interviews booked this month
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Sourcing is Your <br />
          Biggest <span className="relative">
            Bottleneck.
            <span className="absolute bottom-1 left-0 w-full h-3 bg-slate-900 -z-10 opacity-10"></span>
          </span><br />
          <span className="text-[#FF1F6D]">AI Fixes It.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          GoPerfect runs end-to-end outbound sourcing and outreach. <br />
          Fill more positions without the manual work.
        </p>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto shadow-xl shadow-slate-200">
          Book a quick demo
        </button>
      </div>

      {/* Hero Dashboard Preview */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-2">
          <div className="bg-[#FDF2F8] rounded-2xl p-6 md:p-10 border border-pink-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Profile */}
              <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-50 p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/jackie/100/100" className="w-16 h-16 rounded-full" alt="Jackie Robin" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Jackie Robin</h3>
                      <p className="text-slate-500 text-sm">Senior Product Manager at <b>Hexon</b> • New York, NY</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold flex items-center gap-1"><X size={14}/> Skip</button>
                    <button className="px-4 py-2 rounded-lg bg-[#FF1F6D] text-white text-sm font-semibold flex items-center gap-1"><Plus size={14}/> Add to Outreach</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-green-700 font-bold text-sm">80% Likely to move</span>
                        <div className="flex gap-1 text-green-500">
                          <Check size={14} />
                        </div>
                      </div>
                      <p className="text-green-600 text-xs">Recently passed promotion window. Competitor company shift.</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Check size={12} /></div>
                        <div>
                          <p className="font-bold text-sm">Growth-stage PM experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Check size={12} /></div>
                        <div>
                          <p className="font-bold text-sm">Strong product discovery skillset</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Check size={12} /></div>
                        <div>
                          <p className="font-bold text-sm">Customer-first thinking</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Career Timeline</h4>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <img src="https://picsum.photos/seed/hex/40/40" className="w-10 h-10 rounded shadow-sm" alt="Hex" />
                        <div>
                          <p className="text-sm font-bold">Hexon</p>
                          <p className="text-xs text-slate-500">Sr Product Manager • 2.2 years</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <img src="https://picsum.photos/seed/min/40/40" className="w-10 h-10 rounded shadow-sm" alt="Min" />
                        <div>
                          <p className="text-sm font-bold">Ministack</p>
                          <p className="text-xs text-slate-500">Product Manager • 1.7 years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Chat Bar */}
                <div className="mt-8 relative">
                  <input 
                    type="text" 
                    placeholder="Ask Perfect AI..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-12 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-pink-100"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600"><Plus size={18}/></button>
                    <button className="bg-slate-900 text-white p-2 rounded-full"><Send size={16} /></button>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats/Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                  <h4 className="font-bold text-sm mb-4">Matches to Role</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Experience</span>
                      <span className="font-bold">6+ Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Location</span>
                      <span className="font-bold text-green-600">Great Match</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                  <h4 className="font-bold text-sm mb-4">Relevant Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">Product Discovery</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">Go-To-Market</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">B2B</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">SaaS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoTicker: React.FC = () => {
  const logos = ["Etoro", "Reeco", "McCann", "Masterschool", "Optimove", "Alteryx"];
  return (
    <div className="py-12 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Trusted by global recruiting teams</p>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-8 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {logos.map(logo => (
             <span key={logo} className="text-2xl font-black text-slate-400">{logo}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

const SectionHeading: React.FC<{title: string; description: string; center?: boolean}> = ({title, description, center}) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      {description}
    </p>
  </div>
);

const FeatureSection: React.FC<FeatureCardProps> = ({title, description, image, reverse}) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 mb-32`}>
    <div className="flex-1 w-full">
      <img src={image} className="w-full rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500" alt={title} />
    </div>
    <div className="flex-1 space-y-6">
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{title}</h3>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      <button className="flex items-center gap-2 font-bold text-[#FF1F6D] hover:gap-4 transition-all">
        Learn more <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({stat, label, sublabel, colorClass}) => (
  <div className={`p-8 rounded-3xl border border-slate-100 flex flex-col justify-between h-full bg-white shadow-sm hover:shadow-md transition-shadow`}>
    <div>
      <div className="flex mb-4">
        {[1,2,3,4,5].map(i => <span key={i} className="text-[#FF1F6D] text-lg">★</span>)}
      </div>
      <p className="text-slate-800 font-medium italic mb-6">"{sublabel}"</p>
    </div>
    <div>
      <h4 className={`text-4xl font-black mb-2 ${colorClass}`}>{stat}</h4>
      <p className="text-slate-500 text-sm font-semibold">{label}</p>
    </div>
  </div>
);

const FAQ: React.FC<FAQItemProps> = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6 last:border-none">
      <button 
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-[#FF1F6D] transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isOpen ? 'bg-slate-900 text-white' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      
      <main>
        <Hero />
        <LogoTicker />

        {/* Value Prop 1 */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Your Hires. Your Impact." 
            description="Perfect surfaces candidates based on skills, growth patterns, and context—not just resume keywords."
            center
          />
          
          <FeatureSection 
            title="Stop matching to titles. Start matching to trajectory."
            description="Perfect surfaces candidates based on skills, growth patterns, and context, not just resume keywords. Understand where a candidate is going, not just where they've been."
            image="https://picsum.photos/seed/trajectory/800/600"
          />

          <FeatureSection 
            title="See what a resume can't tell you."
            description="Understand how candidates move, grow, and when they're likely to be ready for what's next. Our AI analyzes millions of career paths to predict potential."
            image="https://picsum.photos/seed/insight/800/600"
            reverse
          />
        </section>

        {/* Testimonial Quote Section */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-10 text-pink-500">
               <MessageSquare size={64} fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight">
              "The Recruiter's AI Sidekick"
            </h2>
            <div className="flex items-center justify-center gap-4">
              <img src="https://picsum.photos/seed/yogi/60/60" className="w-14 h-14 rounded-full border-2 border-white/20" alt="Yogi Kidor" />
              <div className="text-left">
                <p className="font-bold text-lg">Yogi Kidor</p>
                <p className="text-slate-400 text-sm">Founder @ Reeco</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Focus - Outreach */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Outreach That's Automated—But Never Feels It." 
            description="Send messages rooted in real candidate signals—from career moves to shared connections. Automate at scale without sacrificing personalization."
            center
          />

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                        <h4 className="text-xl font-bold">Run Campaigns Your Way</h4>
                      </div>
                      <p className="text-slate-600 pl-11">Whether you want full automation or hands-on control, Perfect adapts to your workflow. Launch via LinkedIn, Email, or SMS.</p>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                        <h4 className="text-xl font-bold">Your Process. Your Playbook.</h4>
                      </div>
                      <p className="text-slate-600 pl-11">Choose manual, automated, or hybrid modes. Customize tone, timing, and follow-ups to fit how you and your candidates respond.</p>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FF1F6D] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                        <h4 className="text-xl font-bold">AI-Crafted Messages That Actually Get Read</h4>
                      </div>
                      <p className="text-slate-600 pl-11">Let Perfect draft personalized outreach using insights from each candidate's background, trajectory, and goals.</p>
                   </div>
                </div>
                <div className="relative">
                   <img src="https://picsum.photos/seed/outreach/800/1000" className="rounded-2xl shadow-2xl" alt="Outreach UI" />
                   <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block w-64">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-green-100 text-green-600 p-1 rounded"><Check size={16}/></div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Outreach Health</span>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[84%]"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-600">Reply Rate</span>
                           <span className="font-bold">28%</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Hiring Success Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading 
              title="Stop Letting Others Define Hiring Success." 
              description="You know what great looks like. Don't let outdated tools—or disconnected processes—decide who makes it to the shortlist."
              center
            />
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
               <div className="p-4 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg"></div>
                    <div>
                      <h4 className="font-bold text-lg">Product Manager</h4>
                      <p className="text-slate-500 text-xs">Open Role • SF & NYC</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                     <div className="bg-slate-50 p-6 rounded-2xl">
                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Goal</p>
                        <p className="text-xl font-black">8 Interviews</p>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-2xl">
                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Matches</p>
                        <p className="text-xl font-black">17 / 63</p>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-2xl">
                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Outreach</p>
                        <p className="text-xl font-black">84 / 44</p>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-2xl">
                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Replied</p>
                        <p className="text-xl font-black">4 / 7</p>
                     </div>
                  </div>
                  <img src="https://picsum.photos/seed/dashboard-full/1200/600" className="w-full rounded-2xl border border-slate-100" alt="Dashboard Full View" />
               </div>
            </div>
          </div>
        </section>

        {/* Video Testimonial Section */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-pink-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative group cursor-pointer">
              <img src="https://picsum.photos/seed/video/600/400" className="w-full rounded-2xl shadow-xl" alt="Testimonial Video" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle size={48} className="text-[#FF1F6D]" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-slate-900/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold">
                Hiring Made Easy with GoPerfect
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#FF1F6D] text-2xl">★</span>)}
              </div>
              <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic">
                "GoPerfect made my life so much easier – the matches are just crazy good."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/tomer/60/60" className="w-14 h-14 rounded-full" alt="Tomer Maman" />
                <div>
                   <p className="font-bold text-lg">Tomer Maman</p>
                   <p className="text-slate-500">Founder @ Tamar Golan Headhunting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Wins Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Real Hiring Wins. From Real Recruiting Teams." 
            description="Leading talent teams use Perfect to boost response rates, scale talent pipelines, and make confident hires—faster."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              stat="28%" 
              label="Outreach Reply Rate" 
              sublabel="I love the speed and access to all the candidates with GoPerfect." 
              colorClass="text-[#FF1F6D]"
            />
            <StatCard 
              stat="59%" 
              label="Acceptance Rate" 
              sublabel="GoPerfect because it does about 50% of the tasks I needed to do." 
              colorClass="text-[#FF1F6D]"
            />
            <StatCard 
              stat="+5" 
              label="Successful Hires" 
              sublabel="I'm actually doing an interview today with a staff accountant I found." 
              colorClass="text-[#FF1F6D]"
            />
            <StatCard 
              stat="+100" 
              label="Relevant Candidates" 
              sublabel="GoPerfect made my life so much easier – the matches are just crazy good." 
              colorClass="text-[#FF1F6D]"
            />
          </div>
          <div className="mt-12 text-center">
            <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2 mx-auto">
              Show more <Plus size={16} />
            </button>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[4rem] overflow-hidden relative">
             <div className="p-12 md:p-24 text-center max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Welcome to Smarter Hiring. <br />
                  <span className="text-[#FF1F6D]">Powered By You.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-12">
                  Own your process. Build the team you believe in—with insights that make every match meaningful.
                </p>
                <button className="bg-[#FF1F6D] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#e01a5e] transition-all shadow-2xl shadow-pink-300">
                  See Perfect in Action
                </button>
             </div>
             {/* Mascot Placeholder */}
             <div className="absolute bottom-0 right-0 w-64 h-64 flex items-end">
                <div className="w-full h-full bg-[#FF1F6D] rounded-tl-full flex items-center justify-center">
                   <div className="text-white text-6xl">🦥</div>
                </div>
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQ 
              question="What is talent sourcing with GoPerfect?" 
              answer="GoPerfect is an AI-powered outbound sourcing platform that automates the process of identifying, researching, and contacting top talent. It goes beyond simple keywords to analyze career trajectory and predicted availability."
            />
            <FAQ 
              question="How does GoPerfect AI hiring tool work?" 
              answer="Our AI analyzes millions of data points from public profiles, job descriptions, and market shifts to build a rich understanding of the talent landscape. It identifies candidates who aren't just qualified, but likely to move."
            />
            <FAQ 
              question="Is my data safe with GoPerfect?" 
              answer="Yes, we prioritize security and compliance. All candidate and user data is encrypted, and we strictly follow GDPR and SOC2 standards for data handling and privacy."
            />
            <FAQ 
              question="Can I invite my team to use GoPerfect?" 
              answer="Absolutely! Perfect is built for collaborative recruiting. You can invite hiring managers, fellow recruiters, and coordinators to view pipelines and provide feedback."
            />
            <FAQ 
              question="Can GoPerfect integrate with my existing tools?" 
              answer="Yes, we integrate with popular ATS systems like Greenhouse, Lever, and Ashby, as well as CRM tools and communication platforms like Slack and Outlook."
            />
          </div>
          <div className="mt-16 text-center space-y-4">
             <p className="font-bold text-slate-800">Still have questions?</p>
             <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold">Chat With Us</button>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-24 max-w-7xl mx-auto px-4">
           <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-16">Discover our Blog</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                      <img 
                        src={`https://picsum.photos/seed/blog-${i}/600/400`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        alt="Blog post" 
                      />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF1F6D] transition-colors">
                     {i === 1 ? "The Future of Outbound Sourcing" : i === 2 ? "How to Build a High-Performing Talent Team" : "Mastering Personalized Outreach at Scale"}
                   </h3>
                   <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock size={14} /> <span>5 min read</span>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-20">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-[#FF1F6D] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full translate-x-0.5"></div>
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight italic">perfect</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Empowering recruiters to find their next high-impact hire with AI-driven insights and automated outreach.
                  </p>
                  <div className="flex gap-4">
                     <Linkedin size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                     <Mail size={20} className="text-slate-400 hover:text-white cursor-pointer" />
                  </div>
               </div>
               <div>
                  <h4 className="font-bold mb-6">Platform</h4>
                  <ul className="space-y-4 text-slate-400 text-sm">
                     <li className="hover:text-white cursor-pointer">Sourcing AI</li>
                     <li className="hover:text-white cursor-pointer">Outreach</li>
                     <li className="hover:text-white cursor-pointer">Inbox</li>
                     <li className="hover:text-white cursor-pointer">Analytics</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6">Resources</h4>
                  <ul className="space-y-4 text-slate-400 text-sm">
                     <li className="hover:text-white cursor-pointer">Blog</li>
                     <li className="hover:text-white cursor-pointer">Guides</li>
                     <li className="hover:text-white cursor-pointer">Webinars</li>
                     <li className="hover:text-white cursor-pointer">Community</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-6">Company</h4>
                  <ul className="space-y-4 text-slate-400 text-sm">
                     <li className="hover:text-white cursor-pointer">About Us</li>
                     <li className="hover:text-white cursor-pointer">Careers</li>
                     <li className="hover:text-white cursor-pointer">Contact</li>
                     <li className="hover:text-white cursor-pointer">Privacy</li>
                  </ul>
               </div>
            </div>
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
               <p>© 2024 GoPerfect Inc. All rights reserved.</p>
               <div className="flex gap-8">
                  <span className="hover:text-white cursor-pointer">Terms of Service</span>
                  <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-white cursor-pointer">Cookie Settings</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Persistent Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-[60]">
         <button className="bg-slate-900 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform">
            <MessageSquare size={18} />
            <span className="font-bold text-sm">Chat with us</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
         </button>
      </div>
    </div>
  );
}

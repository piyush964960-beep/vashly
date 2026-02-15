
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Settings, 
  HelpCircle, 
  LayoutGrid, 
  Users, 
  FileSearch, 
  Star, 
  Share2, 
  Plus, 
  ChevronRight, 
  Filter, 
  Eye, 
  MoreHorizontal,
  Linkedin,
  Globe,
  CheckSquare,
  ChevronDown,
  Download,
  Mail,
  Zap,
  Link2,
  Table as TableIcon,
  X,
  MessageSquare,
  BarChart3,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  location: string;
  education: string;
  summary: string;
  matchHighlights: string[];
  socials: { linkedin?: string; github?: string; website?: string; email?: string };
  status: string;
  owner: { name: string; initial: string; color: string };
  date: string;
}

interface SearchItem {
  id: string;
  name: string;
  query: string;
}

interface Project {
  id: string;
  name: string;
  searches: SearchItem[];
  shortlistCount: number;
  interviewsCount: number;
  createdOn: string;
  status: 'Active' | 'Draft' | 'Closed';
  collaborators: string[];
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'First Project',
    shortlistCount: 12,
    interviewsCount: 1,
    createdOn: 'December 19',
    status: 'Active',
    collaborators: [],
    searches: [
      { id: 's1', name: 'India Profiles Explorer', query: 'i want to explore all profiles in india' },
      { id: 's2', name: 'Sales Manager ERP Da', query: 'sales managers with ERP experience' },
      { id: 's3', name: 'India Users', query: 'active users in india' }
    ]
  },
  {
    id: 'p2',
    name: 'Growth Sourcing',
    shortlistCount: 5,
    interviewsCount: 0,
    createdOn: 'January 05',
    status: 'Active',
    collaborators: ['Piyush Gupta'],
    searches: [
      { id: 's4', name: 'Product Designers NYC', query: 'senior product designers in new york' },
      { id: 's5', name: 'React Developers', query: 'frontend developers skilled in react' }
    ]
  }
];

const DUMMY_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Ankur Chandra',
    role: 'Engineering Manager L2',
    company: 'FYND',
    location: 'Noida, Uttar Pradesh, India',
    education: 'Bachelor of Technology, Computer Science at University of Iceland',
    summary: 'Ankur Chandra, based in Noida, India, has extensive experience with Object Oriented programming paradigm and has worked on REST APIs for Web Service based applications.',
    matchHighlights: ['Noida', 'Object Oriented', 'REST APIs'],
    socials: { linkedin: '#', email: '#' },
    status: 'Not Contacted',
    owner: { name: 'Piyush', initial: 'P', color: 'bg-orange-500' },
    date: '8 months ago'
  },
  {
    id: '2',
    name: 'Hardik Gala',
    role: 'Sde 3',
    company: 'FYND',
    location: 'Mumbai, Maharashtra, India',
    education: 'Siescoms',
    summary: 'Hardik Gala, based in Mumbai, has over 10 years of experience in Product Engineering with a focus on DevOps, Cloud Migrations, and Platform Engineering.',
    matchHighlights: ['Mumbai', 'DevOps', 'Cloud Migrations'],
    socials: { linkedin: '#', email: '#' },
    status: 'Interested',
    owner: { name: 'Piyush', initial: 'P', color: 'bg-orange-500' },
    date: '3 months ago'
  }
];

export default function DashboardHome() {
  const [activeView, setActiveView] = useState<'search' | 'shortlist' | 'projects'>('shortlist');
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('p1');
  const [selectedSearchId, setSelectedSearchId] = useState<string>('s1');
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('New Project 2');

  const currentProject = useMemo(() => projects.find(p => p.id === selectedProjectId) || projects[0], [projects, selectedProjectId]);
  const currentSearch = useMemo(() => currentProject.searches.find(s => s.id === selectedSearchId) || currentProject.searches[0] || { id: '', name: 'Empty', query: '' }, [currentProject, selectedSearchId]);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const proj = projects.find(p => p.id === projectId);
    if (proj && proj.searches.length > 0) {
      setSelectedSearchId(proj.searches[0].id);
    }
    setIsProjectMenuOpen(false);
    setActiveView('shortlist');
  };

  const handleCreateProject = () => {
    const newId = `p${projects.length + 1}`;
    const newProject: Project = {
      id: newId,
      name: newProjectTitle,
      shortlistCount: 0,
      interviewsCount: 0,
      createdOn: 'February 12',
      status: 'Active',
      collaborators: [],
      searches: []
    };
    setProjects([...projects, newProject]);
    setShowCreateModal(false);
    setSelectedProjectId(newId);
    setActiveView('projects');
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-['Plus_Jakarta_Sans'] text-slate-900 overflow-hidden tracking-tight">
      
      {/* Sidebar */}
      <aside className="w-[260px] border-r border-slate-200 flex flex-col bg-white shrink-0 z-20">
        <div className="p-4 border-b border-slate-50 flex items-center justify-between">
           <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveView('shortlist')}>
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-black italic tracking-tighter">perfect</span>
           </div>
           <button className="p-1.5 text-slate-400 hover:bg-slate-50 rounded-lg"><ChevronRight size={16} className="rotate-180" /></button>
        </div>

        <nav className="flex-1 overflow-y-auto pt-6 flex flex-col scrollbar-hide px-3">
          <div className="space-y-1 mb-8">
            <button 
              onClick={() => setActiveView('projects')}
              className={`w-full flex items-center gap-3 px-3 py-2 text-[13px] font-bold rounded-xl transition-all ${activeView === 'projects' ? 'bg-purple-50 text-[#7000FF]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <LayoutGrid size={18} strokeWidth={2.5} /> All Projects
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all">
              <Users size={18} strokeWidth={2.5} /> All Agents
            </button>
          </div>

          <div className="mb-8 relative px-3">
             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Active Project</label>
             <button 
               onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
               className={`w-full flex items-center justify-between px-3 py-2.5 bg-white border rounded-xl hover:border-[#7000FF]/30 transition-all shadow-sm ${isProjectMenuOpen ? 'border-[#7000FF] ring-4 ring-purple-50' : 'border-slate-200'}`}
             >
                <span className="text-sm font-extrabold truncate">{currentProject.name}</span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${isProjectMenuOpen ? 'rotate-180' : ''}`} />
             </button>
             
             {isProjectMenuOpen && (
               <div className="absolute top-full left-3 right-3 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 py-2">
                 {projects.map(p => (
                   <button 
                     key={p.id}
                     onClick={() => handleSelectProject(p.id)}
                     className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-50 transition-colors flex justify-between items-center ${selectedProjectId === p.id ? 'text-[#7000FF] bg-purple-50/50' : 'text-slate-600'}`}
                   >
                     {p.name}
                     {selectedProjectId === p.id && <div className="w-2 h-2 rounded-full bg-[#7000FF]" />}
                   </button>
                 ))}
               </div>
             )}
          </div>

          <div className="flex-1 space-y-1">
             <div className="mb-6">
                <div onClick={() => setIsSearchExpanded(!isSearchExpanded)} className="flex items-center justify-between px-3 py-2 group cursor-pointer hover:bg-slate-50 rounded-xl">
                   <div className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <FileSearch size={18} strokeWidth={2.5} /> Searches
                   </div>
                   <Plus size={14} className="text-slate-400" />
                </div>
                {isSearchExpanded && (
                  <div className="ml-9 space-y-1 mt-2">
                     {currentProject.searches.map(s => (
                       <button key={s.id} onClick={() => { setSelectedSearchId(s.id); setActiveView('search'); }} className={`w-full text-left px-3 py-2 text-[13px] rounded-xl transition-all truncate border ${activeView === 'search' && selectedSearchId === s.id ? 'text-[#7000FF] font-extrabold bg-purple-50 border-purple-100 shadow-sm' : 'text-slate-500 font-bold border-transparent hover:bg-slate-50'}`}>
                         {s.name}
                       </button>
                     ))}
                  </div>
                )}
             </div>

             <button 
                onClick={() => setActiveView('shortlist')}
                className={`w-full flex items-center justify-between px-3 py-3 text-[13px] font-extrabold rounded-2xl transition-all border ${activeView === 'shortlist' ? 'bg-[#7000FF] text-white border-[#7000FF]' : 'text-slate-600 bg-white border-slate-100'}`}
              >
                <div className="flex items-center gap-3">
                  <Star size={18} strokeWidth={2.5} fill={activeView === 'shortlist' ? 'currentColor' : 'none'} /> Shortlist
                </div>
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${activeView === 'shortlist' ? 'bg-white/20' : 'bg-slate-100'}`}>{currentProject.shortlistCount}</span>
             </button>
          </div>
        </nav>

        <div className="p-4 space-y-4 bg-white border-t border-slate-50">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Getting Started</span>
                <span className="text-[10px] font-black text-[#7000FF]">33%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7000FF] to-[#FF1F6D] w-1/3"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white text-xs font-black shadow-md">P</div>
            <div className="flex-1 min-w-0">
               <p className="text-sm font-extrabold truncate text-slate-900 leading-none mb-1">Piyush Gupta</p>
               <p className="text-[10px] text-slate-400 font-bold tracking-wider">Pro Workspace</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        {activeView === 'projects' ? (
          /* PROJECTS LIST VIEW */
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col p-8 overflow-y-auto">
               <div className="flex items-center justify-between mb-8">
                  <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
                  <button 
                    onClick={() => setShowCreateModal(true)}
                    className="bg-[#7000FF] text-white px-6 py-2.5 rounded-xl text-sm font-black flex items-center gap-2 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
                  >
                    Create new project <Plus size={16} />
                  </button>
               </div>

               <div className="border-b border-slate-100 mb-6 flex gap-8">
                  <button className="text-[#7000FF] font-black text-sm pb-4 border-b-2 border-[#7000FF]">My Projects</button>
                  <button className="text-slate-400 font-bold text-sm pb-4 border-b-2 border-transparent">Team Projects</button>
               </div>

               <div className="relative mb-8 group">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search for any project title, owner name, or collaborator name" 
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-purple-50" 
                  />
               </div>

               <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                  <table className="w-full text-left text-sm">
                     <thead className="bg-slate-50/50 border-b border-slate-100">
                        <tr className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                           <th className="px-6 py-4">Title</th>
                           <th className="px-6 py-4">Progress</th>
                           <th className="px-6 py-4">Created On</th>
                           <th className="px-6 py-4">Collaborators</th>
                           <th className="px-6 py-4">Status</th>
                           <th className="px-6 py-4"></th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {projects.map((proj) => (
                           <tr key={proj.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-6 flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                    <Users size={16} />
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-slate-900">{proj.name}</span>
                                    {proj.id === selectedProjectId && (
                                       <span className="bg-purple-50 text-[#7000FF] px-2 py-0.5 rounded text-[10px] font-black">SELECTED</span>
                                    )}
                                 </div>
                              </td>
                              <td className="px-6 py-6">
                                 <div className="flex gap-2">
                                    <div className="px-2 py-1 rounded bg-purple-50 text-[#7000FF] text-xs font-bold flex items-center gap-1">
                                       <Users size={12} /> {proj.interviewsCount}
                                    </div>
                                    <div className="px-2 py-1 rounded bg-pink-50 text-[#FF1F6D] text-xs font-bold flex items-center gap-1">
                                       <Star size={12} fill="currentColor" /> {proj.shortlistCount}
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-6 text-slate-500 font-bold">{proj.createdOn}</td>
                              <td className="px-6 py-6 text-slate-400 font-bold">{proj.collaborators.length > 0 ? proj.collaborators.join(', ') : '-'}</td>
                              <td className="px-6 py-6">
                                 <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-black">{proj.status}</span>
                              </td>
                              <td className="px-6 py-6 text-right">
                                 <button className="text-slate-300 hover:text-slate-900"><MoreHorizontal size={20} /></button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Right Side Cards */}
            <div className="w-80 border-l border-slate-100 p-8 flex flex-col gap-6 bg-slate-50/20">
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full translate-x-16 -translate-y-16"></div>
                  <div className="relative z-10">
                     <h3 className="text-xl font-black mb-2 tracking-tight">Introducing Agent</h3>
                     <p className="text-slate-500 text-sm font-medium mb-6">Meet your smart AI recruiting partner</p>
                     <img src="https://picsum.photos/seed/agent/300/180" className="w-full rounded-2xl mb-6 shadow-md group-hover:scale-105 transition-transform duration-500" alt="Agent" />
                     <button className="text-[#7000FF] font-black text-sm hover:underline flex items-center gap-2">Learn more <ArrowRight size={16}/></button>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 relative">
                  <h3 className="text-xl font-black mb-2 tracking-tight">Connect your ATS</h3>
                  <p className="text-slate-500 text-sm font-medium mb-6">Import jobs from 42 platforms.</p>
                  <div className="grid grid-cols-4 gap-3 mb-8">
                     {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 hover:border-purple-200 transition-colors shadow-sm">
                           <div className={`w-6 h-6 rounded-full bg-slate-300 opacity-50`}></div>
                        </div>
                     ))}
                  </div>
                  <button className="text-[#7000FF] font-black text-sm hover:underline flex items-center gap-2">Connect ATS <ExternalLink size={16}/></button>
               </div>
            </div>
          </div>
        ) : (
          /* SHORTLIST / SEARCH VIEW */
          <>
            <header className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0 z-10">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-black uppercase tracking-widest">
                 <span className="bg-slate-50 px-3 py-1.5 rounded-lg text-slate-500 border border-slate-100">{currentProject.name}</span> 
                 <ChevronRight size={14} strokeWidth={3} className="text-slate-300" /> 
                 <span className="text-slate-900 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 uppercase">
                   {activeView === 'search' ? `${currentSearch.name}` : `Shortlist`}
                 </span>
              </div>
              <div className="flex items-center gap-2">
                 <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all">
                   <Download size={16} strokeWidth={2.5} /> Export
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-[#7000FF] text-white rounded-xl text-xs font-black hover:bg-purple-700 transition-all shadow-lg shadow-purple-100">
                   <Zap size={16} strokeWidth={2.5} fill="currentColor" /> AI Rank
                 </button>
              </div>
            </header>

            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
               <div className="flex items-center gap-4 flex-1">
                  <div className="relative max-w-md w-full">
                     <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                     <input type="text" placeholder="Quick find candidate..." className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-2.5 pl-11 pr-4 text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-purple-50" />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-2xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-wider">
                     Date Added <ChevronDown size={14} strokeWidth={2.5} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-2xl text-xs font-black text-[#7000FF] bg-purple-50/50 hover:bg-purple-100/50 transition-all uppercase tracking-wider">
                     <Filter size={16} strokeWidth={3} /> Filters
                  </button>
               </div>
            </div>

            <div className="flex-1 overflow-auto bg-[#FDFDFD]">
              {activeView === 'search' ? (
                <div className="p-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative group mb-16">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF1F6D] rounded-xl flex items-center justify-center text-white text-xs font-black shadow-lg shadow-pink-200">P</div>
                      <input 
                        type="text"
                        defaultValue={currentSearch.query}
                        className="w-full h-18 text-xl font-extrabold text-slate-900 bg-white border-2 border-slate-100 rounded-[2rem] pl-18 pr-40 focus:outline-none focus:border-[#7000FF] transition-all shadow-xl shadow-slate-200/50"
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest">
                        RUN SEARCH
                      </button>
                    </div>
                    {/* Simplified result cards */}
                    <div className="space-y-12">
                      {DUMMY_PROFILES.map((p) => (
                        <div key={p.id} className="flex gap-6 group">
                          <input type="checkbox" className="w-5 h-5 mt-2 rounded-lg border-2 border-slate-200 text-[#7000FF]" />
                          <div className="flex-1 space-y-4">
                            <h3 className="text-2xl font-black text-slate-900 hover:text-[#7000FF] cursor-pointer transition-colors leading-none tracking-tight">{p.name}</h3>
                            <p className="text-sm font-bold text-slate-600">{p.role} at {p.company} • {p.location}</p>
                            <p className="text-base text-slate-600 leading-relaxed font-medium italic border-l-4 border-purple-100 pl-4">{p.summary}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full overflow-x-auto scrollbar-hide">
                  <table className="w-full border-collapse text-left text-[13px] font-bold">
                    <thead className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-10 shadow-sm">
                      <tr className="text-slate-400 font-black uppercase tracking-[0.2em] bg-slate-50/50">
                        <th className="px-6 py-5 w-10"><input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200" /></th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[260px]">Candidate Name</th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[120px]">Social</th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[200px]">Current Status</th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[160px]">Owner</th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[150px]">Date Added</th>
                        <th className="px-6 py-5 border-r border-slate-100 min-w-[220px]">Role / Position</th>
                        <th className="px-6 py-5 min-w-[220px]">Organization</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 bg-white">
                      {DUMMY_PROFILES.map((profile) => (
                        <tr key={profile.id} className="hover:bg-[#F8FAFC] group transition-all duration-200">
                          <td className="px-6 py-5"><input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200" /></td>
                          <td className="px-6 py-5 border-r border-slate-100">
                             <div className="flex items-center justify-between">
                                <span className="font-extrabold text-slate-900 text-base tracking-tight">{profile.name}</span>
                                <div className="bg-purple-50 text-[#7000FF] px-2 py-0.5 rounded-lg text-[9px] font-black tracking-widest ring-1 ring-purple-100">VERIFIED</div>
                             </div>
                          </td>
                          <td className="px-6 py-5 border-r border-slate-100">
                             <div className="flex gap-4"><Linkedin size={20} className="text-blue-600" /><Mail size={20} className="text-slate-300" /></div>
                          </td>
                          <td className="px-6 py-5 border-r border-slate-100">
                             <div className="flex items-center justify-between px-4 py-2.5 border-2 border-slate-50 rounded-2xl bg-white shadow-sm">
                                <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm"></div><span className="font-extrabold text-slate-800 tracking-tight">{profile.status}</span></div>
                                <ChevronDown size={14} className="text-slate-200" />
                             </div>
                          </td>
                          <td className="px-6 py-5 border-r border-slate-100">
                             <div className="flex items-center gap-3 font-extrabold text-slate-700">
                                <div className={`w-8 h-8 rounded-xl ${profile.owner.color} text-white flex items-center justify-center shadow-md font-black`}>{profile.owner.initial}</div>
                                <span className="truncate">{profile.owner.name}</span>
                             </div>
                          </td>
                          <td className="px-6 py-5 border-r border-slate-100 text-slate-400">{profile.date}</td>
                          <td className="px-6 py-5 border-r border-slate-100 text-slate-800">{profile.role}</td>
                          <td className="px-6 py-5 font-extrabold text-slate-900">{profile.company}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <footer className="h-12 border-t border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total candidates: {DUMMY_PROFILES.length}</span>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1 - 2 of 1,000</p>
            </footer>
          </>
        )}
      </main>

      {/* CREATE PROJECT MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-[640px] rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-8 flex items-center justify-between border-b border-slate-50">
                 <h2 className="text-2xl font-extrabold tracking-tight">Launch New Project</h2>
                 <button onClick={() => setShowCreateModal(false)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
              </div>
              <div className="p-10 space-y-10">
                 <div className="space-y-3">
                    <label className="block text-sm font-black text-slate-900">Project Title (required)</label>
                    <input 
                      type="text" 
                      value={newProjectTitle}
                      onChange={(e) => setNewProjectTitle(e.target.value)}
                      placeholder="e.g. Sales Manager - New York"
                      className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 font-bold focus:outline-none focus:border-purple-200 transition-all text-slate-900"
                    />
                 </div>

                 <div className="space-y-4">
                    <label className="block text-sm font-black text-slate-900">Access Level (required)</label>
                    <div className="space-y-4">
                       <label className="flex items-start gap-3 cursor-pointer group">
                          <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 rounded border-2 border-slate-200 text-[#7000FF] focus:ring-[#7000FF]" />
                          <div>
                             <p className="text-sm font-bold text-slate-900 group-hover:text-[#7000FF] transition-colors">Shared (visible to everyone in your organization)</p>
                          </div>
                       </label>
                       <label className="flex items-start gap-3 cursor-pointer group">
                          <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-slate-200 text-[#7000FF] focus:ring-[#7000FF]" />
                          <div>
                             <p className="text-sm font-bold text-slate-900 group-hover:text-[#7000FF] transition-colors">Private (only visible to you, your collaborators, and admin)</p>
                          </div>
                       </label>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="block text-sm font-black text-slate-900">Collaborators (optional)</label>
                    <p className="text-xs text-slate-400 font-bold mb-2">These team members will be assigned to this project with you</p>
                    <button className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 flex items-center justify-between text-slate-400 font-bold hover:bg-slate-100 transition-all">
                       No collaborators selected <ChevronDown size={20} />
                    </button>
                 </div>

                 <div className="flex justify-end pt-4">
                    <button 
                      onClick={handleCreateProject}
                      className="bg-[#7000FF] text-white px-10 py-4 rounded-2xl font-black text-base flex items-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 group active:scale-[0.98]"
                    >
                      Create Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

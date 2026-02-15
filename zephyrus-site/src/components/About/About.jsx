/**
 * About Us / The Team Section
 * Features: Team introduction, member cards with hover effects
 * Mobile-first design
 */

const About = () => {
  // Placeholder team data - to be replaced with actual team info
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Role / Specialty",
      image: null, // Placeholder
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Role / Specialty",
      image: null,
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Role / Specialty",
      image: null,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-4 py-16 md:px-8 lg:px-16 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-indigo-500">Zephyrus</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            We are a team driven by creativity and innovation. Our mission is to
            push boundaries and create experiences that stand out.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#12121a] rounded-xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

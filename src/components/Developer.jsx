import { useEffect, useState } from 'react'

export default function Developer() {
  const [lanyard, setLanyard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const userId = 'YOUR_DISCORD_ID'

    const fetchLanyard = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        setLanyard(data.data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setLanyard(null)
      } finally {
        setLoading(false)
      }
    }

    fetchLanyard()
    const interval = setInterval(fetchLanyard, 30000)
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status) => {
    const colors = {
      online: 'bg-green-500',
      idle: 'bg-yellow-500',
      dnd: 'bg-red-500',
      offline: 'bg-gray-500'
    }
    return colors[status] || 'bg-gray-500'
  }

  const getStatusText = (status) => {
    const texts = {
      online: 'Online',
      idle: 'Idle',
      dnd: 'Do Not Disturb',
      offline: 'Offline'
    }
    return texts[status] || status
  }

  return (
    <section id="developer" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Status</span>
          </div>
          <h2 className="text-5xl font-bold gradient-text">Developer Status</h2>
        </div>

        {loading ? (
          <div className="glass-effect rounded-2xl text-center py-12 animate-slideUp">
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
            <p className="text-slate-400 text-sm mt-4">Loading status...</p>
          </div>
        ) : error ? (
          <div className="glass-effect rounded-2xl p-8 animate-slideUp">
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚙️</div>
              <div>
                <div className="text-cyan-400 font-semibold mb-1">Add Your Discord ID</div>
                <div className="text-slate-400 text-sm">
                  Replace <code className="text-cyan-300 bg-slate-900/50 px-2 py-1 rounded">YOUR_DISCORD_ID</code> in <code className="text-cyan-300 bg-slate-900/50 px-2 py-1 rounded">Developer.jsx</code> to see your live status
                </div>
              </div>
            </div>
          </div>
        ) : lanyard ? (
          <div className="glass-effect rounded-2xl p-8 space-y-6 animate-slideUp">
            <div className="flex items-start gap-4">
              <div className="relative">
                <img
                  src={lanyard.discord_user.avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full border-2 border-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                />
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(lanyard.discord_status)} rounded-full border-2 border-slate-900`}></div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{lanyard.discord_user.username}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(lanyard.discord_status)}`}></div>
                  <span className="text-slate-400">{getStatusText(lanyard.discord_status)}</span>
                </div>
              </div>
            </div>

            {lanyard.activities && lanyard.activities.length > 0 && (
              <div className="border-t border-slate-700/50 pt-6">
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Currently Active</h4>
                <div className="space-y-3">
                  {lanyard.activities.map((activity, idx) => (
                    <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                      <div className="font-semibold text-white">{activity.name}</div>
                      {activity.details && (
                        <div className="text-sm text-slate-400 mt-1">{activity.details}</div>
                      )}
                      {activity.state && (
                        <div className="text-sm text-slate-400">{activity.state}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}

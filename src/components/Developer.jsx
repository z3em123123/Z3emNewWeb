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
    <section id="developer" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Developer Status</h2>

        {loading ? (
          <div className="tech-card text-center py-12">
            <div className="animate-pulse flex justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        ) : error ? (
          <div className="tech-card p-6">
            <div className="text-yellow-400">
              Note: Add your Discord ID to see live status.
              <code className="block text-xs mt-2 text-slate-400">{'Replace YOUR_DISCORD_ID in Developer.jsx'}</code>
            </div>
          </div>
        ) : lanyard ? (
          <div className="tech-card p-8 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={lanyard.discord_user.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-2xl font-bold">{lanyard.discord_user.username}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(lanyard.discord_status)}`}></div>
                  <span className="text-slate-400">{getStatusText(lanyard.discord_status)}</span>
                </div>
              </div>
            </div>

            {lanyard.activities && lanyard.activities.length > 0 && (
              <div className="border-t border-slate-700 pt-6">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Current Activity</h4>
                {lanyard.activities.map((activity, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded p-4">
                    <div className="font-semibold">{activity.name}</div>
                    {activity.details && (
                      <div className="text-sm text-slate-400 mt-1">{activity.details}</div>
                    )}
                    {activity.state && (
                      <div className="text-sm text-slate-400">{activity.state}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}

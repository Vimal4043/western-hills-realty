import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building2, MapPin, Search, Tag } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select.jsx'
import { PROJECT_TYPES, LOCATIONS, AVAILABILITY } from '../data/projects.js'

function Field({ icon, label, labelCls, hero, children }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-2 md:min-w-47.5 ${hero ? 'text-white' : 'text-[#0B2A4A]'}`}>
      <span className="shrink-0">{icon}</span>
      <div className="min-w-0 text-left">
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.22em] md:text-[11px] ${labelCls}`}>
          {label}
        </span>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}

export default function SearchBar({ variant = 'hero', initial = {} }) {
  const navigate = useNavigate()
  const [type, setType] = useState(initial.type || 'any')
  const [location, setLocation] = useState(initial.location || 'any')
  const [availability, setAvailability] = useState(initial.availability || 'any')

  const hero = variant === 'hero'

  const submit = (e) => {
    e?.preventDefault()
    const params = new URLSearchParams()
    if (type !== 'any') params.set('type', type)
    if (location !== 'any') params.set('location', location)
    if (availability !== 'any') params.set('availability', availability)
    const qs = params.toString()
    navigate(qs ? `/projects?${qs}` : '/projects')
  }

  const shell = hero
    ? 'border border-white/15 bg-white/10 backdrop-blur-xl'
    : 'border border-black/10 bg-white shadow-[0_10px_40px_rgb(11,42,74,0.08)]'
  const label = hero ? 'text-white/50' : 'text-[#071E35]'
  const triggerCls = hero
    ? 'border-0 bg-transparent text-white h-auto p-0 focus:ring-0 shadow-none data-[placeholder]:text-white/70'
    : 'border-0 bg-transparent text-[#0B2A4A] h-auto p-0 focus:ring-0 shadow-none'
  const divider = hero ? 'bg-white/15' : 'bg-black/10'
  const cheapSelect = (state, setter, placeholder, values, testid) => (
    <Select value={state} onValueChange={setter}>
      <SelectTrigger className={triggerCls} data-testid={testid} aria-label={placeholder}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="any">{placeholder}</SelectItem>
        {values.map((v) => (
          <SelectItem key={v} value={v}>
            {v}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )

  return (
    <form
      onSubmit={submit}
      data-testid="search-bar"
      className={`relative z-10 mx-auto mt-12 flex w-full max-w-3xl flex-col gap-0 rounded-[20px] p-2 md:mt-14 md:max-w-4xl md:flex-row md:items-end md:rounded-full md:gap-0 ${shell}`}
    >
      <Field icon={<Building2 className="h-4 w-4" />} label="Project type" labelCls={label} hero={hero}>
        {cheapSelect(type, setType, 'Any type', PROJECT_TYPES, 'search-type')}
      </Field>

      <div className={`mx-4 hidden h-10 w-px ${divider} md:block`} />

      <Field icon={<MapPin className="h-4 w-4" />} label="Location" labelCls={label} hero={hero}>
        {cheapSelect(location, setLocation, 'Any location', LOCATIONS, 'search-location')}
      </Field>

      <div className={`mx-4 hidden h-10 w-px ${divider} md:block`} />

      <Field icon={<Tag className="h-4 w-4" />} label="Availability" labelCls={label} hero={hero}>
        {cheapSelect(availability, setAvailability, 'Rent / Sale', AVAILABILITY, 'search-availability')}
      </Field>

      <button
        type="submit"
        data-testid="search-submit"
        className="group flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-8 py-4 text-sm font-semibold text-[#0B2A4A] transition-colors duration-300 hover:bg-[#1d4ed8] md:my-1 md:rounded-full"
      >
        <Search className="h-4 w-4" />
        Search Projects
      </button>
    </form>
  )
}
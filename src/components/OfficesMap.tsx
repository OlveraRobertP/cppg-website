import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export type OfficeLocation = {
  name: string
  address: string
  lat: number
  lng: number
}

const OFFICE_MARKERS: OfficeLocation[] = [
  {
    name: 'Ciudad de México',
    address:
      'Prolongación Paseo de la Reforma 115, interior LC, colonia Paseo de las Lomas, Alcaldía Álvaro Obregón, c.p. 01330.',
    lat: 19.396389,
    lng: -99.263056,
  },
  {
    name: 'Guadalajara',
    address: 'Av. Piotr Ilich Tchaikovski 221-2, La Estancia, 45030 Zapopan, Jal.',
    lat: 20.6736,
    lng: -103.4059,
  },
]

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export function OfficesMap() {
  const center: [number, number] = [20.05, -101.24]
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <MapContainer
        center={center}
        zoom={5}
        className="h-[280px] w-full md:h-[320px]"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {OFFICE_MARKERS.map((office) => (
          <Marker
            key={office.name}
            position={[office.lat, office.lng]}
            icon={defaultIcon}
          >
            <Popup>
              <p className="font-semibold">{office.name}</p>
              <p className="text-sm text-muted-foreground">{office.address}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

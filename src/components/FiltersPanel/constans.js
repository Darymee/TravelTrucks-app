// categories.ts
export const vehicleEquipmentCategories = [
  { label: 'AC', icon: 'icon-ac', isAvailable: v => Boolean(v.AC) },
  {
    label: 'Automatic',
    icon: 'icon-diagram',
    isAvailable: v => v.transmission === 'automatic',
  },
  {
    label: 'Kitchen',
    icon: 'icon-kitchen',
    isAvailable: v => Boolean(v.kitchen),
  },
  { label: 'TV', icon: 'icon-tv', isAvailable: v => Boolean(v.TV) },
  {
    label: 'Bathroom',
    icon: 'icon-bathroom',
    isAvailable: v => Boolean(v.bathroom),
  },
  {
    label: 'Petrol',
    icon: 'icon-petrol',
    isAvailable: v => v.engine === 'petrol',
  },
  { label: 'Radio', icon: 'icon-radio', isAvailable: v => Boolean(v.radio) },
  {
    label: 'Refrigerator',
    icon: 'icon-refrigerator',
    isAvailable: v => Boolean(v.refrigerator),
  },
  {
    label: 'Microwave',
    icon: 'icon-microwave',
    isAvailable: v => Boolean(v.microwave),
  },
  { label: 'Gas', icon: 'icon-gas', isAvailable: v => Boolean(v.gas) },
  { label: 'Water', icon: 'icon-water', isAvailable: v => Boolean(v.water) },
];

export const vehicleTypeCategories = [
  { label: 'Van', icon: 'icon-van' },
  { label: 'Fully Integrated', icon: 'icon-fully-integrated' },
  { label: 'Alcove', icon: 'icon-alcove' },
];

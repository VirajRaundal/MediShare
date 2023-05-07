export default function Perks({selected,onChange}) {
  function handleCbClick(ev) {
    const {checked,name} = ev.target;
    if (checked) {
      onChange([...selected,name]);
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick}/>
        <span>Unopened</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick}/>
        <span>Giveaway</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick}/>
        <span>Delivery</span>
      </label>
      {/* <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('radio')} name="radio" onChange={handleCbClick}/>
        <span></span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick}/>
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick}/>
        <span>Private entrance</span>
      </label> */}
    </>
  );
}
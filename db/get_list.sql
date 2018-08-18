select * 
from list
join cpu
on list.cpu = cpu.id
join cpu_cooler
on list.cooler = cpu_cooler.id
join compcase
on list.compcase = compcase.id
join motherboard
on list.motherboard = motherboard.id
join memory 
on list.memory = memory.id
join storage 
on list.storage = storage.id
join psu 
on list.psu = psu.id
join vid_card
on list.vid_card = vid_card.id
where user_id = $1
select * 
from list
join cpu
on list.cpu = cpu.cpu_id
join cpu_cooler
on list.cooler = cpu_cooler.cooler_id
join compcase
on list.compcase = compcase.case_id
join motherboard
on list.motherboard = motherboard.mb_id
join memory 
on list.memory = memory.mem_id
join storage 
on list.storage = storage.storage_id
join psu 
on list.psu = psu.psu_id
join vid_card
on list.vid_card = vid_card.vid_id
where user_id = $1
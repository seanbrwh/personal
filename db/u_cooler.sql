update list
set cooler = $1
where user_id = $2 and list_id = $3
returning *
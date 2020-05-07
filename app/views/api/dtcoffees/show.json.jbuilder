

json.extract! @dtcoffee, :id, :name, :description, :roast, 
:roaster_id, :weight, :price, :single_origin, :fair_trade, :flavors, :photo
json.photoUrl url_for(@dtcoffee.photo)

@dtcoffees.map do |dtcoffee|
    json.set! dtcoffee.id do
      json.extract! dtcoffee, :id, :name, :description, :roast, 
            :roaster_id, :weight, :price, :single_origin, :fair_trade, :flavors
      json.photoUrl url_for(dtcoffee.photo)
    end
    
end
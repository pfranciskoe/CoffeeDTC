@cart_items.map do |item|
    json.set! item.id do
      json.extract! item, :quantity, :coffee_id, :id
    end
end
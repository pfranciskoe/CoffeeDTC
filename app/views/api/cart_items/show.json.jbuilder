
json.set! @item.id do
      json.extract! @item, :coffee_id, :quantity, :id
end

@roasters.map do |roaster|
    json.set! roaster.id do
      json.extract! roaster, :id, :name, :location, :lat, :lng, :description, :fun_fact
    end 
end
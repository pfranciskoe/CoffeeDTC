json.extract! current_user, :id, :email
json.matches  current_user.matches.map{|match|match.coffee_id}
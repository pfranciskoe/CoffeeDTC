json.extract! @user, :id, :email
json.matches  @user.matches.map{|match|match.coffee_id}
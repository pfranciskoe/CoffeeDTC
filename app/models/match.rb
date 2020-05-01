class Match < ApplicationRecord
    validates :coffee_id, :user_id, presence: true
    belongs_to :dtcoffee,
    foreign_key: :coffee_id,
    class_name: :Dtcoffee

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
end

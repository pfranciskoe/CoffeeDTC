# == Schema Information
#
# Table name: matches
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  coffee_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Match < ApplicationRecord
    validates :coffee_id, :user_id, presence: true
    belongs_to :dtcoffee,
    foreign_key: :coffee_id,
    class_name: :Dtcoffee

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
end

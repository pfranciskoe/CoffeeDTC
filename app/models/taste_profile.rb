# == Schema Information
#
# Table name: taste_profiles
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  experience_level :integer          not null
#  brew_method      :string           not null
#  additions        :string           not null
#  roast            :integer          not null
#  adventure        :string           not null
#  ground           :boolean          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class TasteProfile < ApplicationRecord
    validates :user_id, presence: true, uniqueness:true
    validates :user_id, :experience_level,:brew_method,:additions,:roast,:adventure, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User,
    dependent: :destroy

     def get_match_params
        if self.roast == 1
            roast = [1,2]
        elsif self.roast == 2
            roast = [2,4]
        elsif self.roast == 3
            roast = [4,5]
        end
        if self.experience_level == 1
            price_range = [10,15]
        elsif self.experience_level == 2
            price_range = [15,18]
        elsif self.experience_level == 3
            price_range = [18,22]
        elsif self.experience_level == 4
            price_range = [20,150]
        end

        if self.adventure == 'High'
            adventure 
        
        adventure = self.adventure
        
        return[roast,adventure,exp_level]
    end
    
end

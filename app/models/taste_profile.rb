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
end

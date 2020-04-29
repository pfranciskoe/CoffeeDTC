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
require 'test_helper'

class TasteProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

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
require 'test_helper'

class MatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

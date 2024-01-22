# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # Initialize the Bike with a model, default wheels, and current speed.
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  # Getter and setter methods for the wheels attribute.
  attr_accessor :wheels, :current_speed, :model

  # Method to increase speed by a given amount.
  def pedal_faster(speed_increase)
    @current_speed += speed_increase
  end

  # Method to decrease speed by a given amount, but not below zero.
  def brake(speed_decrease)
    @current_speed = [0, @current_speed - speed_decrease].max
  end

  # Method to provide information about the bike's current state.
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end
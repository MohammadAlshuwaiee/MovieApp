import { Text, View } from "react-native";
import { ListItem, Content, List } from "native-base";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import reviewStore from "../../stores/ReviewStore";
import { observer } from "mobx-react";

const ReviewList = ({ navigation, route }) => {
  const { movie } = route.params;

  useEffect(() => {
    reviewStore.fetchReviews(movie.id);
  }, []);

  if (reviewStore.loading) return <Text> loading</Text>;

  const movieReviews = reviewStore.reviews.filter(
    (movieID) => movieID.id === movie.id
  );

  console.log(movieReviews);
  if (!movieReviews) return <Text> no reviews available</Text>;

  const reviewList = movieReviews.map((review) => (
    <View>
      <ListItem>
        <Text>Reviewer Name:</Text>
        <Text> Rating: {review.rating}</Text>
        <Text>Review: {review.description}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Update Review", { review: review })
          }
        >
          <Text>Update Review</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => reviewStore.deleteReview(review.id, movie.id)}
        >
          <Text>Delete Review</Text>
        </TouchableOpacity>
      </ListItem>
    </View>
  ));

  return (
    <Content>
      <List>{reviewList}</List>
    </Content>
  );
};

export default observer(ReviewList);

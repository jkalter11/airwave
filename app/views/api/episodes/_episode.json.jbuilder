json.extract! episode, :title, :description, :id , :series_id
json.commentIds episode.comment_ids
json.videoUrl episode.video.url
json.thumb episode.series.image_thumb

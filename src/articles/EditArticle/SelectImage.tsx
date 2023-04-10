import React, { useState, useEffect } from "react";
import { Image } from "../../images/image.types";
import imagesService from "../../images/image.service";
import useAuthContext from "../../context/useAuthContext";
import styled from "styled-components";
import { spacing, Button } from "alchemy-tech-ui";
import useFetchArticle from "../useFetchArticle";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import articlesService from "../articles.service";

interface Props {
  articleId: string;
}

interface ImageWrapperProps {
  active: boolean;
}

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(4)};
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  flex-basis: calc(50% - ${spacing(4)});
  ${({ active }) => {
    return active ? "border: 2px solid blue;" : "border: 2px solid white;";
  }}
`;

const SaveButton = styled(Button)`
  width: 100%;
  margin-top: ${spacing(6)};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

export default function SelectImage({ articleId }: Props) {
  const { article, loadingArticle } = useFetchArticle({ articleId });
  const { user } = useAuthContext();
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>(
    article?.id
  );

  useEffect(() => {
    setSelectedImageId(article?.imageId);
  }, [article]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await imagesService.getImages({
          ownerId: user.id,
        });
        setImages(fetchedImages);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchImages();
  }, [user]);

  if (loadingArticle || loading)
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );

  const saveArticle = async () => {
    setLoading(true);
    try {
      await articlesService.updateArticle(articleId, {
        ...article,
        imageId: selectedImageId,
      });
      toast.success("Article Saved Successfully");
    } catch (err) {
      toast.error("An unknown error occured");
    }
    setLoading(false);
  };

  return (
    <div>
      {images.length ? (
        <ImagesContainer>
          {images.map((image) => (
            <ImageWrapper
              key={image.id}
              onClick={() => setSelectedImageId(image.id)}
              active={selectedImageId === image.id}
            >
              <img src={image.url} alt={image.alt} />
            </ImageWrapper>
          ))}
        </ImagesContainer>
      ) : (
        <div>No Images Available.</div>
      )}
      <SaveButton text="Save" onClick={saveArticle} />
    </div>
  );
}

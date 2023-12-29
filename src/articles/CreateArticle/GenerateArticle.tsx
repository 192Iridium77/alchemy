import React, { useState } from "react";
import styled from "styled-components";
import articlesService from "../articles.service";
import { Article } from "../article.types";
import { Button, spacing, colors } from "alchemy-tech-ui";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

interface Props {
  closeModal: () => void;
}

const LoadingContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 40px;
`;

const PromptContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${spacing(4)};
`;

const PromptInput = styled.input`
  display: block;
  padding: 16px;
  border: 1px solid ${colors.gray[200]};
  width: 100%;
`;

const ArticlePreviewContainer = styled.div`
  border: 1px solid ${colors.gray[200]};
  padding: ${spacing(6)};
  margin-top: ${spacing(6)};
`;

const ArticlePreviewLabel = styled.label`
  margin-top: ${spacing(6)};
  font-weight: bold;
  display: block;
`;

const ArticlePreviewContent = styled.div`
  margin-top: ${spacing(2)};
`;

const CreateButton = styled(Button)`
  width: 100%;
  margin-top: ${spacing(6)};
`;

export default function GenerateArticle({ closeModal }: Props) {
  const navigate = useNavigate();

  const [newArticle, setNewArticle] = useState<Partial<Article>>();
  const [question, setArticleQuestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const generateArticle = async (): Promise<Partial<Article> | undefined> => {
    setLoading(true);
    try {
      const result = await articlesService.generateArticle({
        question,
      });
      console.log(
        "🚀 ~ file: GenerateArticle.tsx:68 ~ generateArticle ~ result:",
        result
      );
      toast.error("Article successfully generated.");
      setLoading(false);
      return result;
    } catch (err) {
      toast.error("An unknown error occured");
      setLoading(false);
    }
  };

  const handlePrompt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleQuestion(event.target.value);
  };

  const navToArticle = (slug: string) => {
    navigate(`/articles/${slug}`);
  };

  const createArticle = async () => {
    try {
      if (!newArticle) return;
      await articlesService.createArticle({
        ...newArticle,
        question,
      });

      if (newArticle.slug) navToArticle(newArticle.slug);

      closeModal();

      toast.success("Article Saved Successfully");
    } catch (err) {
      toast.error("An unknown error occured");
    }
  };

  return (
    <>
      <ArticlePreviewLabel htmlFor="prompt" style={{ marginTop: 0 }}>
        Prompt
      </ArticlePreviewLabel>
      <PromptContainer>
        why is there nothing
        <PromptInput
          id="prompt"
          className="block p-4 border border-gray-200"
          width="100%"
          type="text"
          name="prompt"
          placeholder="prompt"
          onChange={handlePrompt}
          onBlur={handlePrompt}
          value={question}
        />
        <Button
          onClick={async () => {
            if (!question) return;

            const generatedArticle = await generateArticle();
            console.log(
              "🚀 ~ file: GenerateArticle.tsx:124 ~ onClick={ ~ generatedArticle:",
              generatedArticle
            );

            if (generatedArticle) {
              setNewArticle(generatedArticle);
            }
          }}
        >
          Generate
        </Button>
      </PromptContainer>
      {loading ? (
        <LoadingContainer>
          <Loading color={colors.gray["600"]} />
        </LoadingContainer>
      ) : null}
      wtf?
      {newArticle?.title}
      {newArticle ? (
        <>
          <ArticlePreviewContainer>
            <ArticlePreviewLabel style={{ marginTop: 0 }}>
              Title
            </ArticlePreviewLabel>
            <ArticlePreviewContent>{newArticle.title}</ArticlePreviewContent>
            <ArticlePreviewLabel>Slug</ArticlePreviewLabel>
            <ArticlePreviewContent>
              /articles/{newArticle.slug}
            </ArticlePreviewContent>
            <ArticlePreviewLabel>Description</ArticlePreviewLabel>
            <ArticlePreviewContent>
              {newArticle.description}
            </ArticlePreviewContent>
          </ArticlePreviewContainer>
          <CreateButton onClick={createArticle}>Create</CreateButton>
        </>
      ) : null}
    </>
  );
}

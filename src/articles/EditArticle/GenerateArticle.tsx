import React, { useEffect, useState } from "react";
import styled from "styled-components";
import articlesService from "../articles.service";
import { Article } from "../article.types";
import { Button, spacing, colors } from "alchemy-tech-ui";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import useFetchArticle from "../useFetchArticle";
import { useNavigate } from "react-router-dom";

// TODO find out why this uses articleId?
interface Props {
  articleId: string;
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

const Create = styled(Button)`
  width: 100%;
  margin-top: ${spacing(6)};
`;

export default function GenerateArticle() {
  const navigate = useNavigate();

  const [newArticle, setNewArticle] = useState<Partial<Article>>();
  const [question, setArticleQuestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setNewArticle(article);
  //   setArticleQuestion(article?.question);
  // }, [article]);

  const generateArticle = async (): Promise<Partial<Article>> => {
    setLoading(true);
    const result = await articlesService.generateArticle({
      question,
    });
    setLoading(false);
    return result;
  };

  const handlePrompt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleQuestion(event.target.value);
  };

  const navToArticle = (slug: string) => {
    navigate(`/articles/${slug}`);
  };

  const create = async () => {
    try {
      const article = await articlesService.createArticle({
        ...newArticle,
        question,
      });
      if (newArticle?.slug) {
        navToArticle(article.slug);
      }
      toast.success("A new article was created");
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

            const { title, slug, description } = await generateArticle();

            setNewArticle({ title, slug, description });
          }}
        >
          {question ? "Regenerate" : "Generate"}
        </Button>
      </PromptContainer>

      {loading ? (
        <LoadingContainer>
          <Loading color={colors.gray["600"]} />
        </LoadingContainer>
      ) : null}

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
          <Create onClick={create}>Create</Create>
        </>
      ) : null}
    </>
  );
}

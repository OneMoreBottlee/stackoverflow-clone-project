package stackoverflow.pre_project.user;

import lombok.*;
import stackoverflow.pre_project.answer.Answer;
import stackoverflow.pre_project.audit.Auditable;
import stackoverflow.pre_project.comment.AnswerComment;
import stackoverflow.pre_project.comment.QuestionComment;
import stackoverflow.pre_project.question.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String message;

    @OneToMany(mappedBy = "user")
    private final List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<AnswerComment> answerComments = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<QuestionComment> questionComments = new ArrayList<>();


}
